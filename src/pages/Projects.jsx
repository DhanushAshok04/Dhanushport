import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import wea from "../assets/projects/wea.jpg";
import olm from "../assets/projects/olm.jpg";
import sat from "../assets/projects/sat.jpg";
import twt from "../assets/projects/twt.jpg";
import crn from "../assets/projects/crn.jpg";
import cc from "../assets/projects/cc.jpeg";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sat}
              isBlog={false}
              title="Satellite Image Classification"
              description="Develop a Convolutional Neural Networks (CNNs) for Satellite Image Classification, enabling accurate identification of various features likecloudy regions, deserts, green areas, and bodies of water.Deployed themodel seamlessly using Streamlit, ensuring user-friendly interaction andaccessibility for real- time image analysis The application empowers users to upload images and instantly receive classified outputs, making it valuable for environmental monitoring and geospatial analysis."
              ghLink="https://github.com/DhanushAshok04/satellite_image_classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olm}
              isBlog={false}
              title="Olympics Data Analysis"
              description="Developed an interactive Power BI dashboard to perform an in-depth analysis of the Olympics dataset, uncovering key insights into various aspects of sports performance and participation. The dashboard features dynamic filters and slicers, enabling users to explore data by country, year, sport, and gender."
              linkedinPostLink="https://www.linkedin.com/posts/dhanush-ashok_datavisualization-powerbi-sportsanalytics-activity-7176592986930130944-zs4-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHUIZwBSlQ2rVEwpKYt1W8js48i9v4Ix90"
              ghLink="https://github.com/DhanushAshok04/Olympics-Data-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crn}
              isBlog={false}
              title="Corn Leaf Disease Detection"
              description="Implemented a Deep learning model for Corn Leaf Disease Detection using Convolutional Neural Networks (CNNs) and Streamlit.Stored corn leaf disease images in a database and utilized CNNs to analyze intricate patterns, accurately identifying diseases Integrated with Streamlit for user-friendly visualization, blending deep learning capabilities with intuitive interfaces for enhanced usability.."
              ghLink="https://github.com/DhanushAshok04/Corn_Leaf_Disease_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wea}
              isBlog={false}
              title="Weather App"
              description="Created a web application utilizing the Django framework and integrated RapidAPI to dynamically fetch and display up to 90% real-time weather data, ensuring users have access to the most accurate and current information available.Implemented user authentication and session management to provide a personalized experience for users.Designed a responsive front-end using HTML, CSS, and Bootstrap to ensure accessibility across device"
              ghLink="https://github.com/DhanushAshok04/API_Using_WeatherApp_Django_Framework-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twt}
              isBlog={false}
              title="Twitter Data Analysis NLP"
              description="Developed a Natural Language Processing (NLP) model to perform sentiment analysis on Twitter data, classifying tweets into positive, negative, or neutral categories.
Utilized Twitter API to collect real-time tweets based on keywords and hashtags, ensuring relevant and timely data.Performed extensive text preprocessing including tokenization, stopword removal, stemming, and lemmatization Deployed the model using Streamlit."

              ghLink="https://github.com/DhanushAshok04/nlp_sentiment_anlaysis-using-twitter-data"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cc}
              isBlog={false}
              title="Crab Age Predicition"
              description="Developed a regression model to predict the age of crabs based on biological features such as shell size, weight, and gender.Performed thorough data preprocessing, including handling missing values and feature normalization to improve model accuracy.Used feature importance analysis to identify which physical traits most influence crab age estimation.
Optimized model performance through hyperparameter tuning and k-fold cross-validation."
              ghLink="https://github.com/DhanushAshok04/Crab_Age_Prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects