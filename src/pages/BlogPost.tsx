
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';

// Mock blog post data
const blogPosts = {
  'ai-advancements': {
    title: 'AI Advancements in Modern Surveillance',
    date: 'April 15, 2025',
    readTime: '8 min read',
    author: 'Sarah Johnson',
    authorTitle: 'CTO at ZeexAI',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868',
    category: 'Technology',
    content: `
      <p class="lead">Artificial intelligence has revolutionized modern surveillance systems, providing unprecedented accuracy and efficiency in security operations.</p>
      
      <p>Over the past decade, we've witnessed remarkable advancements in AI technology that have transformed the surveillance industry. Traditional CCTV systems, once limited to passive recording, have evolved into intelligent security networks capable of analyzing and responding to situations in real-time.</p>
      
      <h2>Computer Vision Breakthroughs</h2>
      
      <p>The foundation of modern AI surveillance lies in computer vision. Recent breakthroughs in deep learning have enabled systems to distinguish between humans, animals, and objects with over 99% accuracy. This has dramatically reduced false alarms, which have historically been a major pain point for security systems.</p>
      
      <p>At ZeexAI, we've developed proprietary neural networks that can identify suspicious behavior patterns by analyzing movement, posture, and contextual information. For example, our systems can differentiate between someone simply walking by a property versus someone exhibiting potential intrusion behavior.</p>
      
      <blockquote>
        <p>The true power of AI in surveillance isn't just in detecting events, but in understanding their context and significance.</p>
      </blockquote>
      
      <h2>Edge Computing and Real-time Processing</h2>
      
      <p>Another significant advancement has been the shift toward edge computing, which allows AI processing to occur directly on surveillance devices rather than in centralized servers. This reduces latency and enables split-second decision making, which is crucial for security applications.</p>
      
      <p>Our latest cameras incorporate specialized AI chips that can process up to 30 frames per second, identifying and tracking multiple subjects simultaneously without any lag in performance.</p>
      
      <h2>Privacy-Preserving Surveillance</h2>
      
      <p>As AI surveillance capabilities have grown, so too have concerns about privacy. Modern systems now incorporate privacy-preserving techniques such as:</p>
      
      <ul>
        <li>Automatic face blurring for individuals not on a watch list</li>
        <li>Encryption of sensitive data</li>
        <li>Granular access controls</li>
        <li>Audit trails for all system interactions</li>
      </ul>
      
      <p>These measures ensure that security can be enhanced without compromising individual privacy rights.</p>
      
      <h2>The Future of AI Surveillance</h2>
      
      <p>Looking ahead, we anticipate several emerging trends in AI surveillance:</p>
      
      <p><strong>Multimodal AI:</strong> Systems that combine visual data with audio, thermal imaging, and other sensors for more comprehensive threat detection.</p>
      
      <p><strong>Predictive Analytics:</strong> AI that can forecast potential security incidents before they occur by identifying patterns and anomalies in historical data.</p>
      
      <p><strong>Autonomous Response:</strong> Integration with robotic systems that can respond physically to security threats, such as drones or ground-based robots that can investigate suspicious activity.</p>
      
      <p>As these technologies continue to evolve, we at ZeexAI remain committed to pushing the boundaries of what's possible in AI surveillance while maintaining the highest ethical standards.</p>
    `
  },
  'privacy-security': {
    title: 'Balancing Privacy with Security in AI Surveillance',
    date: 'April 8, 2025',
    readTime: '6 min read',
    author: 'Michael Chen',
    authorTitle: 'COO at ZeexAI',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    image: 'https://images.unsplash.com/photo-1563790617029-80a94f39b35e',
    category: 'Privacy',
    content: `
      <p class="lead">Finding the balance between robust security measures and respecting individual privacy rights is one of the greatest challenges in modern surveillance technology.</p>
      
      <p>As AI-powered surveillance systems become increasingly sophisticated, questions about privacy and ethical use have moved to the forefront of public discourse. At ZeexAI, we believe that security and privacy should not be viewed as opposing forces, but rather as complementary values that can coexist through thoughtful technology design and governance.</p>
      
      <h2>The Privacy Paradox in Surveillance</h2>
      
      <p>Many people experience what experts call the "privacy paradox" – they want both the benefits of enhanced security and the preservation of their personal privacy. This apparent contradiction has driven our approach to developing surveillance systems that protect people without unnecessarily infringing on their privacy.</p>
      
      <blockquote>
        <p>The most effective security solutions are those that people trust not to violate their fundamental rights.</p>
      </blockquote>
      
      <h2>Privacy-by-Design Principles</h2>
      
      <p>Our AI surveillance systems incorporate privacy-by-design principles, meaning privacy considerations are built into every aspect of our technology from the ground up. Some key elements include:</p>
      
      <ul>
        <li><strong>Data Minimization:</strong> Collecting only the data necessary for security purposes</li>
        <li><strong>Purpose Limitation:</strong> Using data only for its intended security function</li>
        <li><strong>Storage Limitations:</strong> Retaining data only for as long as necessary</li>
        <li><strong>Access Controls:</strong> Restricting who can view surveillance data and under what circumstances</li>
      </ul>
      
      <p>These principles ensure that our systems achieve their security objectives while respecting privacy boundaries.</p>
      
      <h2>Technical Privacy Safeguards</h2>
      
      <p>Beyond these principles, we've implemented specific technical safeguards in our AI surveillance systems:</p>
      
      <p><strong>Selective Monitoring:</strong> Our AI can be configured to only trigger alerts for specific behaviors or individuals, rather than conducting blanket surveillance.</p>
      
      <p><strong>Anonymization:</strong> In public settings, our systems can automatically blur faces and license plates unless a specific security threshold is met.</p>
      
      <p><strong>Encrypted Storage:</strong> All surveillance data is encrypted both in transit and at rest to prevent unauthorized access.</p>
      
      <p><strong>Audit Trails:</strong> Every access to surveillance data is logged and can be reviewed to prevent misuse.</p>
      
      <h2>Compliance with Global Privacy Regulations</h2>
      
      <p>Our systems are designed to comply with major privacy regulations worldwide, including GDPR in Europe, CCPA in California, and similar frameworks in other jurisdictions. This ensures that organizations using our technology can maintain compliance with legal requirements while enhancing their security posture.</p>
      
      <p>At ZeexAI, we're committed to continuing research into privacy-enhancing technologies that will allow even more effective balancing of security and privacy concerns in the future.</p>
    `
  },
  // More blog posts can be added here
};

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? blogPosts[postId as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container-default py-20 text-center">
          <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="mb-8">Sorry, the blog post you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Blog post header */}
      <div 
        className="relative py-32"
        style={{
          background: `linear-gradient(rgba(10, 36, 99, 0.8), rgba(10, 36, 99, 0.8)), url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-default relative z-10">
          <div className="max-w-3xl">
            <Link to="/blog" className="inline-flex items-center text-white mb-6 hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-white mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-sm">
                  <p className="text-white">{post.author}</p>
                  <p className="text-white/70">{post.authorTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog post content */}
      <div className="container-default py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            {/* Share section */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="text-lg font-semibold mb-4">Share this article</h4>
              <div className="flex gap-4">
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700" aria-label="Share on Facebook">
                  <Facebook size={20} />
                </button>
                <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600" aria-label="Share on Twitter">
                  <Twitter size={20} />
                </button>
                <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800" aria-label="Share on LinkedIn">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-zeex-50 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-semibold mb-4 text-zeex-800">About the Author</h4>
              <div className="flex items-center mb-4">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-zeex-800">{post.author}</p>
                  <p className="text-gray-600">{post.authorTitle}</p>
                </div>
              </div>
              <p className="text-gray-600">
                With years of experience in AI and security technology, our experts bring valuable insights to help you understand the evolving landscape of intelligent surveillance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4 text-zeex-800">Related Posts</h4>
              <div className="space-y-4">
                {Object.entries(blogPosts)
                  .filter(([key]) => key !== postId)
                  .slice(0, 3)
                  .map(([key, relatedPost]) => (
                    <Link to={`/blog/${key}`} key={key} className="flex gap-4 group">
                      <div className="w-20 h-16 flex-shrink-0 rounded overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium text-zeex-800 group-hover:text-zeex-600 transition-colors line-clamp-2">{relatedPost.title}</h5>
                        <p className="text-sm text-gray-500">{relatedPost.date}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Newsletter Section */}
      <section className="bg-zeex-50 py-16">
        <div className="container-default">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-zeex-800">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest insights in AI security, delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-zeex-500"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
