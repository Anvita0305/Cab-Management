# Use a base image with Java installed
FROM adoptopenjdk:11-jdk-hotspot

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven project to the container
COPY target/CabsApp-0.0.1-SNAPSHOT.jar /app/CabsApp-0.0.1-SNAPSHOT.jar

# Expose the port that the Spring Boot application listens on
EXPOSE 8080

# Define the command to run when the container starts
CMD ["java", "-jar", "CabsApp-0.0.1-SNAPSHOT.jar"]
