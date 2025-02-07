
import { Calendar, Trophy, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-festival-lightGray">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ea384c_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1]"></div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-white text-festival-red font-semibold mb-6 animate-fade-in">
            July 15-17, 2024
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-up">
            Where Football Meets
            <span className="text-festival-red"> Ultimate Party</span>
          </h1>
          
          <p className="text-xl text-festival-gray mb-12 fade-up stagger-delay-1">
            Join us for an unforgettable 3-day festival combining intense football tournaments
            by day and electrifying parties by night.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 fade-up stagger-delay-2">
            <button className="button-primary">
              Register Now
            </button>
            <button className="button-secondary">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up stagger-delay-3">
            <div className="glass-card p-6 rounded-xl">
              <Trophy className="w-12 h-12 text-festival-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">32 Teams</h3>
              <p className="text-festival-gray">Competing for glory</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <Users className="w-12 h-12 text-festival-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1000+ Players</h3>
              <p className="text-festival-gray">From across the region</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <Calendar className="w-12 h-12 text-festival-red mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">3 Days</h3>
              <p className="text-festival-gray">Of non-stop action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
