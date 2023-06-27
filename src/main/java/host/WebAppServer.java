package host;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebAppServer {

	public static void main(String[] args) {
		SpringApplication.run(WebAppServer.class, args);
	}

}
 