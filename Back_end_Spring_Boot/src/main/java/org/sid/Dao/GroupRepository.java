package org.sid.Dao;


import org.sid.entities.Group;
import org.springframework.data.jpa.repository.JpaRepository;


public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);
}
