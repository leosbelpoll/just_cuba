package com.just.cuba.justcuba.Repository;

import com.just.cuba.justcuba.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, String> {

}
