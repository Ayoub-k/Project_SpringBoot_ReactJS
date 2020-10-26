package org.sid;

import org.sid.Dao.GroupRepository;
import org.sid.entities.Group;
import org.sid.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringReactjsApplication implements CommandLineRunner {

	@Autowired
	private GroupRepository gr;
	public static void main(String[] args) {
		SpringApplication.run(SpringReactjsApplication.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {
		
		gr.save(new Group("DEV", "CASA_CANADA"));
		
		
	}

}
