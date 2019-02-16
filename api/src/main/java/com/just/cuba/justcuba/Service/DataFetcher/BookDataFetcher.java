package com.just.cuba.justcuba.Service.DataFetcher;

import com.just.cuba.justcuba.Model.Book;
import com.just.cuba.justcuba.Repository.BookRepository;
import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BookDataFetcher implements DataFetcher<Optional<Book>> {

    @Autowired
    BookRepository bookRepository;

    @Override
    public Optional<Book> get(DataFetchingEnvironment dataFetchingEnvironment) {
        String id = dataFetchingEnvironment.getArgument("id");

        return bookRepository.findById(id);
    }
}
