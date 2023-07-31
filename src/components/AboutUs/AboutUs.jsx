import React from 'react';
import './AboutUs.css';
import { Routes , Route, useNavigate  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faPhone as faPhoneSolid, faEnvelope as faEnvelopeSolid, faFilePdf as faFilePdfSolid } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  const navigate  = useNavigate(); 
  return (
    <div className="about-us">
      <div className="card">
      
        <img src="https://i.ibb.co/3T0N6K4/Whats-App-Image-2023-04-05-at-15-02-34.jpg"  alt="Place 1" />
        <div className='name_person'>Santosh Dangi</div>
        <div className='about_person'>
          <div>Full Stack Developer</div>
          <div>Indian Institute of Information Technology, Kancheepuran, Chennai 600127 <br /></div>
        </div>
      <a href="https://drive.google.com/file/d/1m7K5PR8eYfCPOxIr1rBA1_ot8zDSTURf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFilePdfSolid} />
        <span>Resume Link</span>
      </a>
      <div className="social-icons">
    
      <a href="https://www.instagram.com/_santoshdangi_/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>

    
      <a href="https://github.com/dangisantosh/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>

    
      <a href="https://www.linkedin.com/in/santosh-dangi/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

     
      <a href="mailto:santoshbadrilal2000@gmail.com">
        <FontAwesomeIcon icon={faEnvelopeSolid} />
      </a>
     <a>
    
        <FontAwesomeIcon icon={faPhoneSolid} />
        <span>+91(7879320752)</span>
     
     </a>
     
    </div>
      </div>
     
      
      <div className="card">
        <img src=""  alt="Place 1" />
        <div className='name_person'>Ravi Shankar Yadav</div>
        <div className='about_person'>
          <div>Full Stack Developer</div>
          <div>Indian Institute of Information Technology, Kancheepuran, Chennai 600127 <br /></div>
        </div>
      <a href="https://drive.google.com/file/d/1Z244REojL6bvnhxkfYhQA6_ClSkannBe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFilePdfSolid} />
        <span>Resume Link</span>
      </a>
      <div className="social-icons">
    
      <a href="https://instagram.com/raviiyadav__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      
    
      <a href="https://github.com/raviiiyadav" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>

    
      <a href="https://linkedin.com/in/raviiiyadav" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

     
      <a href="mailto:raviiyadav.job@gmail.com">
        <FontAwesomeIcon icon={faEnvelopeSolid} />
      </a>
     <a>
    
        <FontAwesomeIcon icon={faPhoneSolid} />
        <span>+91(6387822923)</span>
     
     </a>
     
    </div>
      </div>
    </div>
  );
};

export default AboutUs;
