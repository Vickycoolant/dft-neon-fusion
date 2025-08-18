import React from 'react';
import { Calendar, Award, Users, TrendingUp, Globe, Target, Handshake, Zap } from 'lucide-react';

// Import event images
import eventPartnership from '@/assets/event-partnership.jpg';
import eventAward from '@/assets/event-award.jpg';
import eventSeminar from '@/assets/event-seminar.jpg';
import eventAGM from '@/assets/event-agm.jpg';
import eventClientMeeting from '@/assets/event-client-meeting.jpg';
import eventProductLaunch from '@/assets/event-product-launch.jpg';
import eventTeamMeeting from '@/assets/event-team-meeting.jpg';
import eventTraining from '@/assets/event-training.jpg';
import eventNetworking from '@/assets/event-networking.jpg';
import eventMilestone from '@/assets/event-milestone.jpg';

// const EventsUpdates = () => {
//   const eventsAndUpdates = [
//     {
//       type: 'event',
//       date: 'March 2019',
//       title: 'DFT Consult Founded',
//       description: 'Official establishment of DFT Consult as a technology and advisory firm with focus on AI-powered solutions for financial services.',
//       image: eventMilestone,
//       icon: Target,
//       category: 'Milestone'
//     },
//     {
//       type: 'update',
//       date: 'June 2019',
//       title: 'First Client Acquisition',
//       description: 'Secured first major banking client for automated document verification solutions.',
//       icon: Handshake,
//       category: 'Business Update'
//     },
//     {
//       type: 'event',
//       date: 'September 2020',
//       title: 'Strategic Partnership with Perfios',
//       description: 'Formed strategic alliance with Perfios, India\'s leading fintech company, to deliver advanced AI-powered financial analytics solutions.',
//       image: eventPartnership,
//       icon: Handshake,
//       category: 'Partnership'
//     },
//     {
//       type: 'update',
//       date: 'January 2021',
//       title: 'AI Technology Stack Enhancement',
//       description: 'Major upgrade to our AI infrastructure, improving processing speed by 300% and accuracy to 98.7%.',
//       icon: Zap,
//       category: 'Technology Update'
//     },
//     {
//       type: 'event',
//       date: 'May 2021',
//       title: 'FinTech Innovation Award',
//       description: 'Received prestigious FinTech Innovation Award for outstanding contribution to automated financial data processing and risk assessment.',
//       image: eventAward,
//       icon: Award,
//       category: 'Award'
//     },
//     {
//       type: 'event',
//       date: 'November 2021',
//       title: 'Annual General Meeting 2021',
//       description: 'Successful AGM highlighting 150% growth in client base and expansion into insurance sector automation solutions.',
//       image: eventAGM,
//       icon: Users,
//       category: 'Corporate Event'
//     },
//     {
//       type: 'update',
//       date: 'March 2022',
//       title: 'Insurance Division Launch',
//       description: 'Official launch of specialized insurance automation division, targeting claim processing and underwriting automation.',
//       icon: TrendingUp,
//       category: 'Business Update'
//     },
//     {
//       type: 'event',
//       date: 'July 2022',
//       title: 'AI & Financial Services Seminar',
//       description: 'Hosted industry seminar on "The Future of AI in Financial Services" with over 200 participants from leading financial institutions.',
//       image: eventSeminar,
//       icon: Users,
//       category: 'Industry Event'
//     },
//     {
//       type: 'event',
//       date: 'December 2022',
//       title: 'Major Client Summit',
//       description: 'Organized client summit showcasing new AI-driven solutions and discussing future fintech trends with key stakeholders.',
//       image: eventClientMeeting,
//       icon: Users,
//       category: 'Client Event'
//     },
//     {
//       type: 'event',
//       date: 'April 2023',
//       title: 'Advanced Analytics Platform Launch',
//       description: 'Unveiled next-generation analytics platform featuring real-time risk assessment and predictive modeling capabilities.',
//       image: eventProductLaunch,
//       icon: TrendingUp,
//       category: 'Product Launch'
//     },
//     {
//       type: 'update',
//       date: 'August 2023',
//       title: 'International Expansion',
//       description: 'Expanded operations to three new African markets, establishing partnerships with regional financial institutions.',
//       icon: Globe,
//       category: 'Business Update'
//     },
//     {
//       type: 'event',
//       date: 'January 2024',
//       title: 'Team Development Workshop',
//       description: 'Comprehensive training program for team members on latest AI technologies and industry best practices.',
//       image: eventTraining,
//       icon: Users,
//       category: 'Training Event'
//     },
//     {
//       type: 'event',
//       date: 'June 2024',
//       title: 'Industry Networking Summit',
//       description: 'Participated in major fintech networking summit, establishing new partnerships and exploring collaboration opportunities.',
//       image: eventNetworking,
//       icon: Handshake,
//       category: 'Networking Event'
//     },
//     {
//       type: 'event',
//       date: 'October 2024',
//       title: 'Strategic Planning Retreat',
//       description: 'Executive team retreat focusing on 2025-2027 strategic roadmap and expansion into new technology verticals.',
//       image: eventTeamMeeting,
//       icon: Target,
//       category: 'Corporate Event'
//     }
//   ];

//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case 'Award': return 'text-yellow-600 bg-yellow-50';
//       case 'Partnership': return 'text-blue-600 bg-blue-50';
//       case 'Product Launch': return 'text-green-600 bg-green-50';
//       case 'Training Event': return 'text-purple-600 bg-purple-50';
//       case 'Business Update': return 'text-orange-600 bg-orange-50';
//       case 'Technology Update': return 'text-cyan-600 bg-cyan-50';
//       default: return 'text-gray-600 bg-gray-50';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-r from-primary/5 to-accent/5">
//         <div className="container mx-auto px-6">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
//               Events & Updates
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Track our journey of innovation, partnerships, and milestones that have shaped DFT Consult 
//               into a leading technology and advisory firm in the financial services sector.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
//             <div className="space-y-12">
//               {eventsAndUpdates.map((item, index) => (
//                 <div key={index} className="relative flex items-start">
//                   {/* Timeline Dot */}
//                   <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${
//                     item.type === 'event' ? 'bg-primary' : 'bg-accent'
//                   } text-white shadow-lg`}>
//                     <item.icon className="w-8 h-8" />
//                   </div>
                  
//                   {/* Content */}
//                   <div className="ml-8 flex-1">
//                     <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
//                       {item.category}
//                     </div>
                    
//                     <div className="mt-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
//                       {item.image && (
//                         <div className="aspect-video overflow-hidden">
//                           <img 
//                             src={item.image} 
//                             alt={item.title}
//                             className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                           />
//                         </div>
//                       )}
                      
//                       <div className="p-6">
//                         <div className="flex items-center space-x-3 mb-3">
//                           <Calendar className="w-5 h-5 text-muted-foreground" />
//                           <span className="text-sm font-medium text-muted-foreground">{item.date}</span>
//                         </div>
                        
//                         <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
//                         <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-muted/30">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">6+</div>
//               <div className="text-muted-foreground">Years of Innovation</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">10+</div>
//               <div className="text-muted-foreground">Major Events</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">5+</div>
//               <div className="text-muted-foreground">Industry Awards</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary mb-2">50+</div>
//               <div className="text-muted-foreground">Strategic Partnerships</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EventsUpdates;
