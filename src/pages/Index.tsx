import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Mail, Github, Users, Sun, Settings, Plus, Code, BookText, Briefcase } from 'lucide-react';
import profileImage from '@/assets/profile-hero.jpg';
import project1Image from '@/assets/project-1.png';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';
import project11Image from '@/assets/project-11.png';
import project12Image from '@/assets/project-12.png';
import project13Image from '@/assets/project-13.png';
import project14Image from '@/assets/project-14.png';
import project15Image from '@/assets/project-15.png';
import project16Image from '@/assets/project-16.png';
import project17Image from '@/assets/project-17.png';
import project18Image from '@/assets/project-18.png';
import project21Image from '@/assets/project-21.png';
import project22Image from '@/assets/project-22.png';
import project23Image from '@/assets/project-23.png';
import project24Image from '@/assets/project-24.png';
import project25Image from '@/assets/project-25.png';
import project26Image from '@/assets/project-26.png';
import project31Image from '@/assets/project-31.png';
import project32Image from '@/assets/project-32.png';
import project33Image from '@/assets/project-33.png';
import project34Image from '@/assets/project-34.png';
import project35Image from '@/assets/project-35.png';
import project36Image from '@/assets/project-36.png';
import project37Image from '@/assets/project-37.png';
import project38Image from '@/assets/project-38.png';
import project39Image from '@/assets/project-39.png';
import project40Image from '@/assets/project-40.png';
import project41Image from '@/assets/project-41.png';
import project42Image from '@/assets/project-42.png';
import project43Image from '@/assets/project-43.png';
import project44Image from '@/assets/project-44.png';
import project45Image from '@/assets/project-45.png';
import project27Image from '@/assets/project-27.png';
import project28Image from '@/assets/project-28.png';
import project29Image from '@/assets/project-29.png';
import project30Image from '@/assets/project-30.png';
import project51Image from '@/assets/project-51.jpg';
import project52Image from '@/assets/project-52.png';
import { FaLinkedin } from "react-icons/fa";

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [autoScrollIntervals, setAutoScrollIntervals] = useState({});
  const { toast } = useToast();

  const roles = [ 'Software Developer','Problem Solver', 'Full stack developer', 'AI Enthusiast'];

  useEffect(() => {
    const roleText = roles[currentRole];
    let i = 0;
    const typingTimer = setInterval(() => {
      if (i < roleText.length) {
        setTypedText(roleText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => {
          setTypedText('');
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingTimer);
  }, [currentRole]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  const skills = [
    { name: 'React.js and MERN Stack', level: 90, category: 'Programming' },
    { name: 'DSA with C++', level: 90, category: 'Programming' },
    { name: 'Java and Python', level: 85, category: 'Programming' },
    { name: 'MongoDb , Oracle database', level: 85, category: 'Tools' },
    { name: 'VScode & Cloud', level: 80, category: 'Tools' },
    { name: 'Problem Solving', level: 92, category: 'Soft Skills' },
    { name: 'Leadership', level: 95, category: 'Soft Skills' },
    { name: 'Communication', level: 90, category: 'Soft Skills' },
    
  ];

  const projects = [
    {
      title: 'DeepFitAI - Sports Talent Assessment Platform',
      description: [
        'Built an website and Mobile App of DeepFitAI.',
        'Developed an AI/ML system for Live camera video detection exercises like jump, height, sit-ups, and run distance.',
        'AI-powered real-time pose and motion analysis (posture, reps, jump height, timing, distance), with offline support.',
        'Implemented graph-based exercise analysis with scoring to evaluate movement accuracy and performance.'
      ],
      tech: ['Python', 'AI/ML','MediaPipe', 'TenserFlow', 'OpenCV','YOLOV8','Flask','Android Studio'],
      images: [project11Image, project12Image, project13Image, project14Image, project15Image, project16Image, project17Image, project18Image],
      Video : 'https://drive.google.com/file/d/1e-GvV23Lmig82FK-Kljw_DKxogd2Xhup/view',
      demo: 'https://deepfitai-bwj8.onrender.com/',
      github: '#'
    },
    {
      title: 'Local Connect E-Commerce Application',
      description: [
        'Integrated a unified web platform enabling users to seamlessly book repair services (AC, Electrical, Mechanical,Electronics) and securely buy or sell event tickets.',
        'mplemented secure payment processing using Stripe, enabling safe and reliable transactions for both service bookings and ticket purchases.',
        'Developed time slot booking and cart scheduling features. And implemented Chatbot for customer support.',
        'Combined user-friendly interfaces with efficient backend logic to ensure seamless functionality.'
      ],
      tech: ['MERN', 'React.js', 'Node.js', 'MongoDB','Stripe'],
      images: [project1Image,project21Image, project22Image, project23Image, project24Image, project25Image, project26Image,project27Image,project28Image,project29Image,project30Image],
      github: 'https://github.com/Arunchand19/Local-Connect-Ecommerce-.git',
      demo: '#'
    }, 
    {
      title: 'AI-Based Medical Diagnosis System',
      description: [
        'Developed an AI system using Python and machine learning to detect diseases based on healthcare symptom data',
        'Designed and implemented an AI disease detection system using Python and machine learning algorithms',
        'Utilized healthcare symptom data to deliver accurate medical predictions and enhance diagnostic support'
      ],
      tech: ['Python', 'Flask', 'AI/ML', 'Streamlit', 'Data Model Sets'],
      images: [project2Image, project41Image, project42Image, project43Image, project44Image, project45Image],
      github: 'https://github.com/Arunchand19/Medical-diagnosis-AI',
      demo: 'https://medical-diagnosis-ai-5.onrender.com/'
    },
    {
      title: 'Train Food delivery system ',
      description: [
        'Developed a web-based platform enabling train passengers to order food from a variety of restaurants along their travel route.',
        'Implemented Gmail OTP verification for user authentication, ensuring secure access and reducing the risk of fraudulent orders or misuse.',
        'Integrated multiple secure payment options including UPI and card payments.',
        'Enabled real-time station selection and scheduled food delivery by agents at chosen stations.'
      ],
      tech: ['Python', 'Google-API', 'Flask', 'HTML','CSS'],
      images: [project31Image, project32Image, project33Image, project34Image, project35Image, project36Image, project37Image, project38Image, project39Image, project40Image],
      github: '#',
      demo: '#'
    },
    {
      title: 'Traffic Optimization System ',
      description: [
        'Implemented a vehicle detection system using YOLOv8 to count traffic in four directions',
        'Optimize signal timing based on real-time vehicle density.',
        'Utilized OpenCV for video processing and object tracking from live camera feeds.'
        
      ],
      tech: ['Machine Learning', 'YOLOv8', 'Python', 'ML Libraries'],
      images: [project51Image,project52Image],
      github: '#',
      demo: '#'
    }
  ];

  const certifications = [
    { name: 'Advanced Software Engineering', provider: 'Walmart Global Tech', year: '2025', link: 'https://drive.google.com/file/d/1LT_cY8fvhHPLHthf85uHPyBmNGggKkqb/view' },
    { name: 'Carrer Essentials in Data Analysis by Linkedin', provider: 'Microsoft ', year: '2024', link: 'https://drive.google.com/file/d/1wFzXnLz9pyGvnAf0RVdBMi4Aq8vRTPzJ/view' },
    { name: 'CodeClash – The Battle of Logic & Code (Finalist)', provider: 'Lets Code Community (Unstop)', year: '2025', link: 'https://drive.google.com/file/d/174oDu45M5RSKyoxECnWL47Et2jjKKtiQ/view?usp=drivesdk' },
    { name: 'Introduction to Networks', provider: 'Cisco Networking Academy ', year: '2024', link: 'https://drive.google.com/file/d/1vrgbEeOuxFm_barBeYPGfu8Q35iDy620/view' },
    { name: 'National Coding Hackathon', provider: 'HackVega', year: '2025', link: 'https://drive.google.com/file/d/1FXMwpg3BxJ--kfkxFvz9D5xirxYnakOj/view?usp=sharing' },
    { name: 'IIT GandhiNagar Hackathon', provider: 'IITG', year: '2025', link: 'https://drive.google.com/file/d/1N35wBS7_CMfzh0KtvZWkNnvnVthsahBp/view?usp=sharing' },
    { name: 'Cyber security certification', provider: 'Cisco Networking Academy', year: '2024', link: 'https://drive.google.com/file/d/1h27ajLPfnaP2qgRr59FvjUyq7Vn7pb6a/view?usp=sharing' },
    { name: 'NULLCLASS web development', provider: 'NULLCLASS', year: '2025', link: 'https://drive.google.com/file/d/1Qtz4YkHy8hGR25_YWAhmHl0AnzRvaaL4/view?usp=sharing' },
    { name: 'Providence Leap Ideathon(Qualified to Stage-2)', provider: 'Providence', year: '2024', link: 'https://drive.google.com/file/d/1vpqmX1F0kuvj6FKA1FV813tet2GZIuLn/view?usp=sharing' },
    { name: 'Programming and Problem solving through C', provider: 'NPTEL', year: '2025', link: 'https://drive.google.com/file/d/17mJCrpKuQjNjwEOcmo_7fO5mxnfh4Cdu/view?usp=sharing' },
    { name: 'Industrial Networking', provider: 'Cisco Networking Academy', year : '2025', link: 'https://drive.google.com/file/d/1sihIg3Kt2GtAVpLWhJlzkuBptvoUdkUg/view?usp=sharing' },
    { name: 'Getting started with Cisco Packet Tracer', provider: 'Cisco Networking Academy',year : '2025', link: 'https://drive.google.com/file/d/1nxZbGlK28-EfpdVy9QUQbWFTdUBvkteR/view?usp=sharing' },
    { name: 'Abacus', provider: 'Viswam Edutech', link: 'https://drive.google.com/file/d/1t_0LCX9PtNIK0uPQfO6yHx2mcwQ_jXhg/view?usp=sharing' },

    { name: 'District Running Trails', provider: 'Warangal District', link: 'https://drive.google.com/file/d/1y8NkxdCg4vjsFrjZvXfy2KIDYKxSLxeJ/view?usp=sharing' },

  ];

  const experiences = [
    {
      company: 'Olcademy',
      role: 'Full Stack Developer Intern',
      
      duration: 'Feb 2025 - Sep 2025',
      description: [ 'Served as Associate Team Lead on Project-Z, a food delivery website. Collaborated with a team to design and develop robust logic approaches.','Built scalable, high-performance applications using the MERN stack and industry best practices.', 'Contributed to a collaborative team project by applying strong logical thinking and modern development tools to build scalable and efficient solutions.'],
      certificateLink: 'https://drive.google.com/file/d/1_oztt1oYDjHqJJPJWjzOxTdFynEgPnB5/view?usp=sharing',
      
    },
    {
      role: 'Machine Learning Traniee',
      company: 'Amazon ML Summer School 2025',
      duration: 'Aug 2025 - Sep 2025',
      description: ['Amazon ML Summer School Scholar Traniee.','Machine Learning (ML) topics including Supervised Learning, DeepNeural Networks, Dimensionality Reduction, Unsupervised Learning.','Generative AI and LLMs, Sequential Learning, Causal Inference and Reinforcement Learning.'],
      certificateLink: 'https://drive.google.com/file/d/1XPMNNlHn399AlpcYocnkE3EvFh5PKs6j/view?usp=sharing'
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Edunet foundation by Microsoft',
      duration: 'Feb 2025 - Mar 2025',
      description: ['Developed AI modules using machine learning algorithms and real-world healthcare datasets.','Contributed to intelligent diagnostic and decision support systems for medical applications','Implemented an AI disease detection system using Python and machine learning algorithms'],
      certificateLink: 'https://drive.google.com/file/d/1rlFScz7Uu7-XqT5PaYro5C8ITou7pu_Z/view'
    },
    {
      role: 'Open source Contributor',
      company: 'GirlScript Summer of Code 2025 (GSSOC-25)',
      duration: 'sep 2025 - oct 2025',
      description: ['Contributed to open-source projects under GSSoC, enhancing features and fixing bugs across multiple repositories.','Collaborated with maintainers and other contributors using Git, GitHub, and followed standard open-source practices.','Gained hands-on experience in real-world development while improving code quality, documentation, and functionality.'],
      certificateLink: 'https://drive.google.com/file/d/1JXHHgV3OTCCYwPN0UTFmnB9rmyUU9STX/view?usp=sharing'
    },
    {
      role: 'Web Developer Intern',
      company: 'Oasis InfoByte',
      duration: 'Feb 2025 - Mar 2025',
      description: ['Received a Letter of Appreciation(LOA) from the company for delivering quality work and timely project completion.','Built responsive web projects including a Temperature Converter and a Landscaping Service Platform using HTML, CSS, and JavaScript.','Implemented user-friendly interfaces with functional features to enhance usability and user engagement.'],
      certificateLink: 'https://drive.google.com/file/d/1IhqEixU3jitI4QLjfp7Yq5r3jkV9G7Pm/view?usp=drivesdk'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-poppins font-semibold text-glow">
              Arunchand Mallarapu
            </div>
            <div className="hidden md:flex space-x-6">
              {['About', 'Education', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'education' ? 'education' : item.toLowerCase() === 'certifications' ? 'certifications' : item.toLowerCase())}
                  className="glass-button px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/20 hover:text-primary hover:shadow-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-poppins text-glow">
                Hi, I'm{' '}
                <span className="text-foreground">Arunchand</span>{' '}
                <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                  Mallarapu
                </span>
              </h1>
              <div className="h-16 flex items-center">
                <span className="text-2xl lg:text-3xl font-medium">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg">
                I'm a passionate learner who thrives at the intersection of creativity and technology, with a strong focus on problem solving and web technologies to build impactful solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.setAttribute('download', 'Arunchand_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="bg-gradient-to-r from-blue-800 to-purple-700 text-white px-8 py-3 text-lg font-medium rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300"
>
  Download Resume
</Button>

              

<Button 
  variant="outline" 
  onClick={() => window.open("https://www.linkedin.com/in/arunchand-mallarapu-3b03a828b/", "_blank")}
  className="bg-blue-600 text-white flex items-center gap-2 px-8 py-3 text-lg font-medium rounded-2xl hover:bg-blue-700 transition-all duration-300"
>
  <FaLinkedin className="text-xl" />
  LinkedIn
</Button>


            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <img 
                src={profileImage} 
                alt="Arunchand Mallarapu"
                className="relative w-80 h-80 rounded-full object-cover shadow-glow hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            About Me
          </h2>
          <Card className="glass-card rounded-2xl hover-lift">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    I'm currently working as a Full Stack Developer Intern at Olcademy, where I contribute to the development of robust, scalable web applications across the full technology stack. My approach combines a strong foundation in software development with a continuous drive to learn, grow, and solve real-world problems through technology.
                  </p>
                  <p className="text-lg leading-relaxed">
                     I am excited to apply for the Software Developer position at your organization. With a solid
 foundation in Data Structures and Algorithms and hands-on experience as a Full Stack
 Developer, I bring technical expertise, problem-solving ability, and practical project
 experience that align well with the requirements of this role
                  </p>
                 {/*} <div className="glass-card p-4 rounded-xl border border-accent/30">
                    <p className="font-medium text-accent-foreground">
                      💡 Fun Fact: I once built a chatbot that helps students find study groups, 
                      and it's now used by over 10,000 students across 50+ universities!
                    </p>
                  </div>   */}
                </div>
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Current Focus</h3>
                    <ul className="space-y-2 text-sm">
                      <li>💻 Software Developer</li>
                      <li>🌐 Full-Stack Web Development</li>
                      <li>🤖 AI/Machine Learning Applications</li>
                      <li>💻 Data structures and Algorithms</li>
                      
                      
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-glass">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Education
          </h2>
          <div className="space-y-8">
            <div className="timeline-item">
              <Card className="glass-card rounded-2xl hover-lift ml-8">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">Vasavi College Of Engineering</h3>
                      <p className="text-primary font-medium">Bachelor of Engineering in Information Technology</p>
                       <h6 className="text-primary font-medium">(Honours in Artificial Intelligence and Machine Learning)</h6>
                      <p className="text-sm text-muted-foreground"><b>CGPA : 8.85/10 </b> • Expected May 2027</p>
                    </div>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                  <p className="mt-3 text-sm">
                    Relevant Coursework: Data Structures & Algorithms, Full Stack Development, Artificial Intelligence and Machine Learning 
                    , Database Management Systems, Computer Networks, Computer Interaction .
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="timeline-item">
              <Card className="glass-card rounded-2xl hover-lift ml-8">
                <CardContent className="p-6">
                  <div>
                    <h3 className="text-xl font-semibold">Sri Chaitanya Juniour College</h3>
                    <p className="text-primary font-medium">Intermediate</p>
                    <p className="text-sm text-muted-foreground">percentage : 95.2%  • JEE-MAINS : 94 Percentile</p>
                  </div>
                  <p className="mt-3 text-sm">
                    Focused on Mathematics, Physics, and Chemistry subjects (Qualified to JEE-Advance Exam).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <Card className="glass-card rounded-2xl hover-lift ml-8">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{exp.duration}</Badge>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(exp.certificateLink, '_blank')}
                          className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/20 hover:to-secondary/20 hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                        >
                          <span className="relative z-10 font-medium">Certificate</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                        </Button>
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Skills & Expertise
          </h2>
          
          {/* New Skills Structure based on uploaded image */}
          <Card className="glass-card rounded-2xl hover-lift mb-12">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                 {/* Technical Skills */}
                <div>
                  <div className="flex items-center mb-6 group cursor-pointer">
                    <Code className="w-6 h-6 text-primary mr-3 group-hover:text-white transition-colors duration-300" />
                    <h3 className="text-2xl font-semibold bg-primary/10 hover:bg-primary hover:text-white px-6 py-3 rounded-full border-2 border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer">Technical Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['React.js', 'Node.js', 'JavaScript','Python', 'MySQL', 'MongoDB', 'Artificial Intelligence', 'Neural Networks', 'Git', 'Flask', 'Machine Learning'].map((skill) => (
                      <Badge 
                        key={skill} 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Soft Skills */}
                <div>
                  <div className="flex items-center mb-6 group cursor-pointer">
                    <Users className="w-6 h-6 text-primary mr-3 group-hover:text-white transition-colors duration-300" />
                    <h3 className="text-2xl font-semibold bg-primary/10 hover:bg-primary hover:text-white px-6 py-3 rounded-full border-2 border-primary/20 hover:border-primary transition-all duration-300 cursor-pointer">Soft Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Leadership', 'Teamwork', 'Problem Solving', 'Communication', 'Project Management', 'Critical Thinking'].map((skill) => (
                      <Badge 
                        key={skill} 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer px-4 py-2 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Original Progress Bars */}
          <div className="grid md:grid-cols-3 gap-8">
            {['Programming', 'Tools', 'Soft Skills'].map((category) => (
              <Card key={category} className="glass-card rounded-2xl hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">{category}</h3>
                  <div className="space-y-4">
                    {skills.filter(skill => skill.category === category).map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar h-2">
                          <div 
                            className="skill-progress h-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-glass">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-poppins text-glow">
            Featured Projects
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass-card rounded-3xl hover-lift overflow-hidden shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 min-h-[400px]"
                onMouseEnter={() => {
                  const interval = setInterval(() => {
                    setCurrentImageIndex(prev => {
                      const current = prev[index] || 0;
                      const newIndex = current === project.images.length - 1 ? 0 : current + 1;
                      return {...prev, [index]: newIndex};
                    });
                  }, 2000);
                  setAutoScrollIntervals(prev => ({...prev, [index]: interval}));
                }}
                onMouseLeave={() => {
                  if (autoScrollIntervals[index]) {
                    clearInterval(autoScrollIntervals[index]);
                    setAutoScrollIntervals(prev => {
                      const newIntervals = {...prev};
                      delete newIntervals[index];
                      return newIntervals;
                    });
                  }
                }}
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2 aspect-[16/9] overflow-hidden relative group bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-xl border border-primary/20">
                    <div className="flex transition-transform duration-500 ease-in-out h-full" style={{transform: `translateX(-${((currentImageIndex[index] || 0) * 100)}%)`}}>
                      {project.images.map((img, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={img} 
                          alt={`${project.title} ${imgIndex + 1}`}
                          className="w-full h-full object-contain flex-shrink-0 hover:scale-105 transition-transform duration-700"
                        />
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setCurrentImageIndex(prev => ({...prev, [index]: imgIndex}))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            imgIndex === (currentImageIndex[index] || 0) ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                    <button 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      onClick={() => {
                        const current = currentImageIndex[index] || 0;
                        const newIndex = current === 0 ? project.images.length - 1 : current - 1;
                        setCurrentImageIndex(prev => ({...prev, [index]: newIndex}));
                      }}
                    >
                      ‹
                    </button>
                    <button 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-primary/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      onClick={() => {
                        const current = currentImageIndex[index] || 0;
                        const newIndex = current === project.images.length - 1 ? 0 : current + 1;
                        setCurrentImageIndex(prev => ({...prev, [index]: newIndex}));
                      }}
                    >
                      ›
                    </button>
                  </div>
                  <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <ul className="text-lg text-muted-foreground leading-relaxed space-y-2">
                        {project.description.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Tech Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech) => (
                            <Badge 
                              key={tech} 
                              className="bg-primary/10 text-primary border-primary/30 hover:bg-primary hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 pt-4">
                        {project.github !== '#' && (
                          <Button 
                            variant="outline" 
                            onClick={() => window.open(project.github, '_blank')}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                          >
                            <Github className="w-5 h-5" />
                            View Code
                          </Button>
                        )}
                        {project.demo !== '#' && (
                          <Button 
                            onClick={() => window.open(project.demo, '_blank')}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300"
                          >
                            <span>Live Demo</span>
                          </Button>
                        )}
                        {project.Video && (
                          <Button 
                            variant="outline"
                            onClick={() => window.open(project.Video, '_blank')}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                          >
                            <span>View Video</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-gradient-glass">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card rounded-2xl hover-lift">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-xl">
                    <BookText className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{cert.year}</Badge>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(cert.link, '_blank')}
                      className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/20 hover:to-secondary/20 hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      <span className="relative z-10 font-medium">View</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="floating absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="floating absolute bottom-20 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" style={{animationDelay: '-1s'}}></div>
          <div className="floating absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg" style={{animationDelay: '-2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-poppins text-blue-900 animate-pulse tracking-wide">
  Let's Build Something Amazing Together!
</h2>


            <p className="text-muted-foreground animate-slide-in-left">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-slide-in-left">
              <Card className="glass-card rounded-2xl hover-lift transform hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 bg-gradient-primary bg-clip-text text-transparent">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300">
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">arunchandmallarapu@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Github className="w-5 h-5 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">github.com/Arunchand19</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                      <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors duration-300">linkedin.com/in/arunchand-mallarapu</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card rounded-2xl hover-lift transform hover:scale-[1.02] transition-all duration-500 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="relative group">
                    <Input 
                      placeholder="Your Name" 
                      className="glass-button border-white/20 focus:border-primary/50 focus:shadow-glow transition-all duration-300 group-hover:border-primary/30"
                      required 
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div className="relative group">
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="glass-button border-white/20 focus:border-primary/50 focus:shadow-glow transition-all duration-300 group-hover:border-primary/30"
                      required 
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <div className="relative group">
                    <Textarea 
                      placeholder="Your Message" 
                      className="glass-button border-white/20 min-h-32 focus:border-primary/50 focus:shadow-glow transition-all duration-300 group-hover:border-primary/30"
                      required 
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full glass-button py-3 bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-pulse-glow"
                  >
                    <span className="relative z-10">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-glass border-t border-white/20 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Arunchand Mallarapu.
          </p>
          {/*<div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="sm" className="glass-button">
              <Github className="w-4 h-4" /> 
            </Button>
            <Button variant="ghost" size="sm" className="glass-button">
              <Users className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="glass-button">
              <Mail className="w-4 h-4" />
            </Button> 
          </div>   */}
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 glass-button p-3 rounded-full shadow-glow hover-lift"
      >
        <Plus className="w-5 h-5 rotate-45" />
      </button>
    </div>
  );
};

export default Index;