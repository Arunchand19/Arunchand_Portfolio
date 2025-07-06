import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Mail, Github, Users, Sun, Settings, Plus, Code, BookText, Briefcase } from 'lucide-react';
import profileImage from '@/assets/profile-hero.jpg';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const { toast } = useToast();

  const roles = ['AI Enthusiast', 'Frontend Developer', 'Lifelong Learner', 'Problem Solver'];

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
    { name: 'React & TypeScript', level: 90, category: 'Programming' },
    { name: 'Python & AI/ML', level: 85, category: 'Programming' },
    { name: 'Node.js & APIs', level: 80, category: 'Programming' },
    { name: 'Figma & Design', level: 75, category: 'Tools' },
    { name: 'AWS & Cloud', level: 70, category: 'Tools' },
    { name: 'Leadership', level: 95, category: 'Soft Skills' },
    { name: 'Communication', level: 90, category: 'Soft Skills' },
    { name: 'Problem Solving', level: 88, category: 'Soft Skills' }
  ];

  const projects = [
    {
      title: 'Smart Learning Platform',
      description: 'AI-powered educational platform with personalized learning paths and real-time analytics.',
      tech: ['React', 'Python', 'TensorFlow', 'AWS'],
      image: project1Image,
      github: '#',
      demo: '#'
    },
    {
      title: 'EcoCommerce Mobile App',
      description: 'Sustainable e-commerce app connecting eco-conscious consumers with green products.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      image: project2Image,
      github: '#',
      demo: '#'
    },
    {
      title: 'Data Insights Dashboard',
      description: 'Interactive analytics dashboard for visualizing complex business data with AI recommendations.',
      tech: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      image: project3Image,
      github: '#',
      demo: '#'
    }
  ];

  const certifications = [
    { name: 'AWS Solutions Architect', provider: 'Amazon Web Services', year: '2024' },
    { name: 'Machine Learning Specialization', provider: 'Coursera (Stanford)', year: '2023' },
    { name: 'Full Stack Web Development', provider: 'freeCodeCamp', year: '2023' },
    { name: 'Google UX Design Certificate', provider: 'Google Career Certificates', year: '2024' }
  ];

  const experiences = [
    {
      role: 'Frontend Developer Intern',
      company: 'TechStart Solutions',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Developed responsive web applications using React and TypeScript, collaborated with design team to implement user-centered interfaces.'
    },
    {
      role: 'Research Assistant',
      company: 'University AI Lab',
      duration: 'Jan 2024 - Present',
      description: 'Working on natural language processing research, published 2 papers on sentiment analysis applications.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-poppins font-semibold text-glow">
              Alex Johnson
            </div>
            <div className="hidden md:flex space-x-6">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="glass-button px-4 py-2 rounded-xl text-sm font-medium"
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
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Alex
                </span>
              </h1>
              <div className="h-16 flex items-center">
                <span className="text-2xl lg:text-3xl font-medium">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg">
                I'm a passionate computer science student who thrives at the intersection of 
                creativity and technology, building solutions that make a difference.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="glass-button px-8 py-3 text-lg font-medium rounded-2xl"
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="glass-button px-8 py-3 text-lg font-medium rounded-2xl"
              >
                Let's Connect
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <img 
                src={profileImage} 
                alt="Alex Johnson"
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
                    I'm a passionate learner pursuing Computer Science at Stanford University. 
                    I thrive at the intersection of creativity and technology, constantly seeking 
                    innovative ways to solve complex problems through elegant code.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My journey in tech started with curiosity about how things work, and has 
                    evolved into a deep love for creating experiences that genuinely improve 
                    people's lives.
                  </p>
                  <div className="glass-card p-4 rounded-xl border border-accent/30">
                    <p className="font-medium text-accent-foreground">
                      💡 Fun Fact: I once built a chatbot that helps students find study groups, 
                      and it's now used by over 10,000 students across 50+ universities!
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Current Focus</h3>
                    <ul className="space-y-2 text-sm">
                      <li>🤖 AI/Machine Learning Applications</li>
                      <li>🌐 Full-Stack Web Development</li>
                      <li>📱 Mobile App Development</li>
                      <li>🎨 UI/UX Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-gradient-glass">
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
                      <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                      <p className="text-primary font-medium">Stanford University</p>
                      <p className="text-sm text-muted-foreground">GPA: 3.8/4.0 • Expected May 2025</p>
                    </div>
                    <Badge variant="secondary">Current</Badge>
                  </div>
                  <p className="mt-3 text-sm">
                    Relevant Coursework: Data Structures & Algorithms, Machine Learning, 
                    Web Development, Database Systems, Human-Computer Interaction
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="timeline-item">
              <Card className="glass-card rounded-2xl hover-lift ml-8">
                <CardContent className="p-6">
                  <div>
                    <h3 className="text-xl font-semibold">High School Diploma</h3>
                    <p className="text-primary font-medium">Lincoln High School</p>
                    <p className="text-sm text-muted-foreground">Valedictorian • Class of 2021</p>
                  </div>
                  <p className="mt-3 text-sm">
                    National Honor Society, Math Olympiad Champion, 
                    Founded Coding Club with 150+ members
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Skills & Expertise
          </h2>
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-glow">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card rounded-2xl hover-tilt overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="glass-button">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="glass-button">
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.duration}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gradient-glass">
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
                  <Badge variant="secondary">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 font-poppins text-glow">
            Let's Build Something Together!
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="glass-card rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>alex.johnson@email.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Github className="w-5 h-5 text-primary" />
                      <span>github.com/alexjohnson</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span>linkedin.com/in/alexjohnson</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-card rounded-2xl">
              <CardContent className="p-6">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input 
                    placeholder="Your Name" 
                    className="glass-button border-white/20"
                    required 
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="glass-button border-white/20"
                    required 
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    className="glass-button border-white/20 min-h-32"
                    required 
                  />
                  <Button type="submit" className="w-full glass-button py-3">
                    Send Message
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
            © 2024 Alex Johnson. Built with ❤️ using React & TypeScript
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="sm" className="glass-button">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="glass-button">
              <Users className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="glass-button">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
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