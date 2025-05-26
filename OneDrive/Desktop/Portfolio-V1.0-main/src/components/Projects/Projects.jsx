import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa";

// Custom descriptions for each project
const projectDescriptions = {
  // Add your custom descriptions here, keyed by repo name
  // Example:
  // "project-name": "This project does X, Y, and Z. Built with ...",
  "Kidney-Disease-Prediction-Model": "A machine learning-based predictive model designed to detect and assess the risk of kidney disease using medical data for early intervention and improved patient outcomes.",
  "Purchase-Behavior-Analysis": "A predictive analytics solution designed to forecast retail sales by uncovering patterns in historical data, enabling smarter inventory planning, promotional strategies, and operational decisions to boost overall business performance.",
  "Stock-Market-Forecasting-Integrating-LSTM-and-Random-Forest-Model": "Interactive dashboard that integrates LSTM neural networks and Random Forest models to deliver real-time and predictive stock market insights, empowering data-driven financial decision-making.",
  "Eardrum-image-classification": "An AI-powered image classification system using CNN architectures to detect and classify normal, effusion, and tympanostomy tube conditions from eardrum images, enhancing diagnostic accuracy for middle ear infections in children."
};

// Placeholder for project specific data like images and tools
const projectDetails = {
  // Example structure:
  // "project-name": {
  //   imageUrl: "/assets/projects/project-name.png", // Add image paths here
  //   category: "Category", // Add category here
  //   tools: ["tool1", "tool2"] // Add list of tools here (lowercase, no spaces)
  // },
  "Kidney-Disease-Prediction-Model": {
    imageUrl: "/assets/projects/Kidney-disease-prediction-model.jpg",
    category: "Healthcare", // Added category based on example
    tools: ["python", "scikit-learn", "NLTK"] // Updated tools to match example hashtags
  },
  "Purchase-Behavior-Analysis": {
    imageUrl: "/assets/projects/Purchase-Behavior-Analysis.jpg",
    category: "E-commerce", // Added category
    tools: ["Python", "pandas", "numpy", "scikit-learn", "matplotlib", "seaborn"]
  },
  "Stock-Market-Forecasting-Integrating-LSTM-and-Random-Forest-Model": {
    imageUrl: "/assets/projects/Stock-Market-Forecasting-Integrating-LSTM-and-Random-Forest-Model.jpg",
    category: "stckmarket", // Added category
    tools: ["Streamlit", "pandas", "scikit-learn", "TensorFlow", "numpy", "yfinance", "python-dotenv", "stocknews", "datetime", "Prophet", "plotly", "Alpha Vantage"]
  },
  "Eardrum-image-classification": {
    imageUrl: "/assets/projects/Eardrum-image-classification.jpg",
    category: "Healthcare", // Added category
    tools: ["MATLAB", "Neural Networks", "ResNet-18", "AlexNet"]
  },
  "Reddit-Network-Analysis": {
    imageUrl: "/assets/projects/Reddit-Network-Analysis.jpg",
    tools: [] // Add tools for this project if needed
  }
};

// Define the custom order for projects
const customProjectOrder = [
  "Kidney-Disease-Prediction-Model",
  "Purchase-Behavior-Analysis",
  "Eardrum-image-classification",
  "Stock-Market-Forecasting-Integrating-LSTM-and-Random-Forest-Model",
  "Reddit-Network-Analysis",
  // Add other project names here in your desired order
  // "other-project-1",
  // "other-project-2",
];

const glideInVariantTop = {
  hidden: { opacity: 0, y: -50 }, // Start from 50px above and fully transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } // Glide down to original position and fully opaque
};

const glideInVariantBottom = {
  hidden: { opacity: 0, y: 100 }, // Start from 100px below and fully transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } // Glide up to original position and fully opaque
};

const PROJECTS_PER_PAGE = 4; // Define how many projects to show initially

export const Projects = () => {
  const [allRepos, setAllRepos] = useState([]);
  const [visibleRepos, setVisibleRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jasmine6789/repos?per_page=100")
      .then(res => res.json())
      .then(data => {
        // Exclude the jasmine6789 repo
        const filtered = data.filter(repo => repo.name !== "jasmine6789");

        // Sort based on customProjectOrder
        const sorted = filtered.sort((a, b) => {
          const indexA = customProjectOrder.indexOf(a.name);
          const indexB = customProjectOrder.indexOf(b.name);

          // If both are in the custom list, sort by their index
          if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
          }
          // If only a is in the custom list, a comes first
          if (indexA !== -1) {
            return -1;
          }
          // If only b is in the custom list, b comes first
          if (indexB !== -1) {
            return 1;
          }
          // If neither is in the custom list, sort by creation date (or another criteria)
          const yearA = new Date(a.created_at).getFullYear();
          const yearB = new Date(b.created_at).getFullYear();
          return yearB - yearA; // Default sort by year descending for projects not in custom list
        });

        setAllRepos(sorted);
        setVisibleRepos(sorted.slice(0, PROJECTS_PER_PAGE)); // Show initial projects based on custom order
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleRepos(allRepos); // Show all projects
  };

  return (
    <section className={styles.container} id="projects">
      <motion.h2 
        className={styles.title}
        variants={glideInVariantTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className={styles.projects}>
        {visibleRepos.map((repo, idx) => {
          const projectDetail = projectDetails[repo.name] || {};
          const projectDescription = projectDescriptions[repo.name] || repo.description || "No description available. See the source for more details.";
          
          return (
            <CardWithTilt key={repo.id} repo={repo} projectDetail={projectDetail} projectDescription={projectDescription} />
          );
        })}
      </div>
      {visibleRepos.length > 6 && allRepos.length > visibleRepos.length && (
        <motion.button 
          className={styles.loadMoreButton} 
          onClick={handleLoadMore}
          variants={glideInVariantBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          Load More
        </motion.button>
      )}
    </section>
  );
};

// New CardWithTilt component to handle the tilt effect for each card
const CardWithTilt = ({ repo, projectDetail, projectDescription }) => {
  const cardRef = useRef(null); // Ref for the card element
  const mouseX = useMotionValue(0); // Motion value for mouse X position
  const mouseY = useMotionValue(0); // Motion value for mouse Y position

  // Function to handle mouse move
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    mouseX.set(e.clientX - cardRect.left); // Set mouse X relative to card
    mouseY.set(e.clientY - cardRect.top); // Set mouse Y relative to card
  };

  // Map mouse position to rotation values
  const rotateX = useTransform(mouseY, [0, 300], [15, -15]); // Adjusted range and increased max rotation
  const rotateY = useTransform(mouseX, [0, 400], [-15, 15]); // Adjusted range and increased max rotation

  const handleMouseLeave = () => {
    // Reset motion values to center on mouse leave
    // Assuming card width is around 400px and height around 300px based on layout attempts
    mouseX.set(400 / 2);
    mouseY.set(300 / 2);
  };

  // Set initial position to center on mount to prevent unintended tilt
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const cardRect = card.getBoundingClientRect();
    // Set mouse position to the center of the card dimensions used in useTransform
    mouseX.set(cardRect.width / 2);
    mouseY.set(cardRect.height / 2);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef} // Attach ref to the motion.div
      className={styles.projectCard}
      variants={glideInVariantBottom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      // Apply dynamic transform properties using style prop
      style={{
        perspective: 1000,
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={projectDetail.imageUrl}
        alt={`${repo.name.replace(/-/g, ' ')} project screenshot`}
        className={styles.projectImage}
      />

      <div className={styles.projectContent}> {/* Use the new content div */}
        <h3 className={styles.projectTitle}>{repo.name.replace(/-/g, ' ')}</h3>
        {/* Add Project Category */}
        {projectDetail.category && (
          <p className={styles.projectCategory}>{projectDetail.category}</p>
        )}
        
        <p className={styles.projectDescription}>{projectDescription}</p>
      
        {/* Tools Used as Hashtags */}
        {projectDetail.tools && projectDetail.tools.length > 0 && (
          <div className={styles.projectTools}> {/* Use the new tools div */}
            {projectDetail.tools.map((tool, toolIdx) => (
              <span key={toolIdx} className={styles.projectTool}>{`#${tool}`}</span>
            ))}
          </div>
        )}

        {/* GitHub Link */}
        <a 
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink} // Add a class for styling
        >
          <FaGithub className={styles.githubIcon} /> {/* Add GitHub icon */}
        </a>
      </div>
    </motion.div>
  );
};