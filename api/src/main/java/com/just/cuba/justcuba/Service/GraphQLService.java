package com.just.cuba.justcuba.Service;

import com.just.cuba.justcuba.Model.Book;
import com.just.cuba.justcuba.Repository.BookRepository;
import com.just.cuba.justcuba.Service.DataFetcher.AllBooksDataFetcher;
import com.just.cuba.justcuba.Service.DataFetcher.BookDataFetcher;
import graphql.GraphQL;
import graphql.schema.DataFetcher;
import graphql.schema.GraphQLSchema;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.SchemaGenerator;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;
import java.util.stream.Stream;

@Service
public class GraphQLService {

    @Value("classpath:graphql/books.graphql")
    Resource resource;

    private GraphQL graphQL;

    @Autowired
    BookRepository bookRepository; // just to save some fake books

    @Autowired
    private AllBooksDataFetcher allBooksDataFetcher;

    @Autowired
    private BookDataFetcher bookDataFetcher;

    @PostConstruct
    private void loadSchema() throws IOException {
        loadFakeData();

        File schemaFile = resource.getFile();

        TypeDefinitionRegistry typeRegistry = new SchemaParser().parse(schemaFile);
        RuntimeWiring wiring = buildRuntimeWiring();
        GraphQLSchema schema = new SchemaGenerator().makeExecutableSchema(typeRegistry, wiring);
        graphQL = GraphQL.newGraphQL(schema).build();

    }

    private void loadFakeData() {
        Stream.of(
                new Book("1", "Title 1", "Publisher 1", new String[]{
                        "Author 1",
                        "Other author 1"
                }, "Jan 22, 1879"),
                new Book("2", "Title 2", "Publisher 2", new String[]{
                        "Author 2",
                        "Other author 2"
                }, "Mar 12, 2000"),
                new Book("3", "Title 3", "Publisher 3", new String[]{
                        "Author 3",
                        "Other author 3"
                }, "Dec 23, 1987"),
                new Book("4", "Title 4", "Publisher 4", new String[]{
                        "Author 4",
                        "Other author 4"
                }, "Oct 2, 2005")
        ).forEach(book -> bookRepository.save(book));
    }

    private RuntimeWiring buildRuntimeWiring() {
        return RuntimeWiring.newRuntimeWiring()
                .type("Query", typeWiring->typeWiring
                            .dataFetcher("books", allBooksDataFetcher)
                            .dataFetcher("book", bookDataFetcher))
                .build();
    }

    public GraphQL getGraphQL() {
        return graphQL;
    }
}
