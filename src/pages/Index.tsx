import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ChatbotTrigger } from "@/components/ChatbotTrigger";
import { ParticlesBackground } from "@/components/ParticlesBackground";

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground className="fixed inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero onChatOpen={() => setIsChatbotOpen(true)} />
        <Features />
        <UseCases />
        <Testimonials />
        <FAQ />
        <Footer />
        
        {!isChatbotOpen && (
          <ChatbotTrigger onClick={() => setIsChatbotOpen(true)} />
        )}
        
        <Chatbot 
          isOpen={isChatbotOpen} 
          onClose={() => setIsChatbotOpen(false)} 
        />
      </div>
    </div>
  );
};

export default Index;
