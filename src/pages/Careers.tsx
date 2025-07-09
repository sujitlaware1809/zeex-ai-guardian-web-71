import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useToast } from '../hooks/use-toast';
import { motion } from 'framer-motion';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Marketing Intern',
    department: 'Marketing',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Assist in digital marketing campaigns, social media management, and brand outreach for Zeex AI.',
    requirements: [
      'Interest in marketing, communications, or business',
      'Familiarity with social media platforms',
      'Good written and verbal communication skills',
      'Creative mindset and willingness to learn'
    ],
    benefits: [
      'Mentorship from marketing professionals',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '2',
    title: 'Video Editing Intern',
    department: 'Media',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Support the creation and editing of promotional, training, and product videos for Zeex AI.',
    requirements: [
      'Basic experience with video editing software (e.g., Premiere Pro, Final Cut, DaVinci)',
      'Creativity and attention to detail',
      'Portfolio or sample work (if available)',
      'Ability to work with deadlines'
    ],
    benefits: [
      'Mentorship from creative team',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '3',
    title: 'Computer Vision Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Work on computer vision projects, data collection, and model evaluation for Zeex AI’s products.',
    requirements: [
      'Basic knowledge of Python and OpenCV',
      'Interest in AI, ML, or computer vision',
      'Analytical and problem-solving skills',
      'Eagerness to learn and experiment'
    ],
    benefits: [
      'Mentorship from AI engineers',
      'Access to latest AI tools and resources',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '4',
    title: 'Data Annotation/Analytics Intern',
    department: 'Data',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Assist in annotating, cleaning, and analyzing data for AI model training and validation.',
    requirements: [
      'Attention to detail and patience',
      'Basic understanding of data and spreadsheets',
      'Interest in AI and data science',
      'Ability to follow instructions and meet deadlines'
    ],
    benefits: [
      'Mentorship from data science team',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '5',
    title: 'Business Development Intern',
    department: 'Business',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Support the business team in lead generation, market research, and client outreach.',
    requirements: [
      'Interest in business, sales, or entrepreneurship',
      'Good communication and research skills',
      'Self-motivated and proactive attitude',
      'Ability to work independently and in a team'
    ],
    benefits: [
      'Mentorship from business leaders',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '6',
    title: 'AI Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Contribute to AI model development, testing, and deployment for Zeex AI’s core products.',
    requirements: [
      'Basic knowledge of Python and machine learning libraries',
      'Interest in AI/ML research and applications',
      'Strong analytical and problem-solving skills',
      'Eagerness to learn and collaborate'
    ],
    benefits: [
      'Mentorship from senior AI engineers',
      'Access to real-world AI projects',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '7',
    title: 'Backend Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Assist in building and maintaining scalable backend services and APIs for Zeex AI’s platform.',
    requirements: [
      'Basic knowledge of Node.js, Python, or similar backend languages',
      'Understanding of REST APIs and databases',
      'Problem-solving mindset',
      'Ability to work in a team'
    ],
    benefits: [
      'Mentorship from backend engineers',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '8',
    title: 'Frontend Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Work on user interface development using React and modern web technologies.',
    requirements: [
      'Basic knowledge of React, JavaScript/TypeScript, and CSS',
      'Interest in UI/UX design',
      'Attention to detail',
      'Willingness to learn new frameworks'
    ],
    benefits: [
      'Mentorship from frontend developers',
      'Flexible work hours',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '9',
    title: 'Full Stack Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Gain hands-on experience in both frontend and backend development for Zeex AI’s products.',
    requirements: [
      'Basic knowledge of web development (React, Node.js, etc.)',
      'Understanding of databases and REST APIs',
      'Problem-solving and communication skills',
      'Eagerness to work across the stack'
    ],
    benefits: [
      'Mentorship from full stack engineers',
      'Exposure to end-to-end product development',
      'Certificate and letter of recommendation'
    ]
  },
  {
    id: '10',
    title: 'Cloud Engineering Intern',
    department: 'Engineering',
    location: 'Remote / Chennai',
    type: 'Internship',
    experience: 'Student / Fresher',
    description: 'Support the deployment and management of cloud infrastructure for Zeex AI’s scalable solutions.',
    requirements: [
      'Interest in cloud platforms (AWS, GCP, Azure)',
      'Basic understanding of DevOps or cloud tools',
      'Willingness to learn about CI/CD and automation',
      'Team player attitude'
    ],
    benefits: [
      'Mentorship from cloud engineers',
      'Hands-on experience with cloud technologies',
      'Certificate and letter of recommendation'
    ]
  }
];

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('coverLetter', formData.coverLetter);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch('https://zeex-website-backend-1.onrender.com/api/career-application', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Application Submitted!",
          description: "Thank you for your interest. We'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          coverLetter: '',
          resume: null
        });
        setShowApplicationForm(false);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900 overflow-hidden">
        <div className="container-default relative z-10 flex flex-col items-center justify-center text-center h-full py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            Join Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Build the future of AI with us. We're looking for passionate individuals who want to make a difference.
          </motion.p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => setShowApplicationForm(true)}
            className="mt-2"
          >
            Apply Now
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Company Culture Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <CardTitle>Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work on cutting-edge AI technologies and be part of groundbreaking innovations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <CardTitle>Global Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your work will help businesses worldwide leverage the power of AI.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <CardTitle>Great Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join a diverse team of experts who are passionate about technology and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Job Openings Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {jobPositions.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-sm mt-2">
                        {job.department} • {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
                      {job.type}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">{job.experience}</Badge>
                    <Badge variant="outline">{job.location}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => {
                      setSelectedJob(job);
                      setFormData({ ...formData, position: job.title });
                      setShowApplicationForm(true);
                    }}
                    className="w-full"
                  >
                    Apply for this position
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎓', title: 'Campus Access', desc: 'Get access to IIT Madras campus during working hours' },
              { icon: '🤝', title: 'Professional Network', desc: 'Build a strong network with industry leaders and peers' },
              { icon: '📜', title: 'Certificate', desc: 'Receive a certificate of internship or employment' },
              { icon: '💼', title: 'Industry Skills', desc: 'Gain hands-on experience with real-world projects and tools' },
              { icon: '☁️', title: 'Cloud Tech', desc: 'Work on software like AWS, GCP, and other industry platforms' },
              { icon: '🚀', title: 'Career Growth', desc: 'Clear career progression and mentorship' },
              { icon: '🏠', title: 'Remote Work', desc: 'Flexible work from anywhere policy' },
              { icon: '🎉', title: 'Team Events', desc: 'Regular team building and social events' }
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Apply for {selectedJob?.title || 'Position'}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowApplicationForm(false)}
                >
                  ✕
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    placeholder="e.g., 3-5 years"
                  />
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="resume">Resume/CV (PDF, DOC, DOCX) *</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Submit Application
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowApplicationForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers; 