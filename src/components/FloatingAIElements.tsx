import { Brain, Cpu, Zap, Bot } from "lucide-react";

const FloatingAIElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating AI Icons */}
      <div className="absolute top-20 left-10 animate-bounce delay-100">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center neon-glow">
          <Brain className="w-6 h-6 text-primary" />
        </div>
      </div>
      
      <div className="absolute top-32 right-16 animate-bounce delay-300">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center neon-glow">
          <Cpu className="w-8 h-8 text-accent" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 animate-bounce delay-500">
        <div className="w-10 h-10 rounded-full bg-primary-glow/30 flex items-center justify-center neon-glow">
          <Zap className="w-5 h-5 text-primary-glow" />
        </div>
      </div>
      
      <div className="absolute bottom-20 right-12 animate-bounce delay-700">
        <div className="w-14 h-14 rounded-full bg-accent-glow/25 flex items-center justify-center neon-glow">
          <Bot className="w-7 h-7 text-accent-glow" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200" />
      </div>
      <div className="absolute top-3/4 right-1/3">
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-400" />
      </div>
      <div className="absolute top-1/2 left-1/3">
        <div className="w-1 h-1 bg-primary-glow rounded-full animate-pulse delay-600" />
      </div>
      <div className="absolute bottom-1/3 right-1/4">
        <div className="w-2 h-2 bg-accent-glow rounded-full animate-pulse delay-800" />
      </div>
    </div>
  );
};

export default FloatingAIElements;