import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Enhanced GPS tracking points with routes
  const trackingPoints = [
    { x: 15, y: 25, delay: 0, color: 'emerald' },
    { x: 35, y: 45, delay: 1, color: 'cyan' },
    { x: 65, y: 30, delay: 2, color: 'blue' },
    { x: 80, y: 60, delay: 3, color: 'purple' },
    { x: 45, y: 70, delay: 4, color: 'pink' },
    { x: 20, y: 55, delay: 5, color: 'indigo' },
  ];

  // Routes connecting points
  const routes = [
    { from: trackingPoints[0], to: trackingPoints[1] },
    { from: trackingPoints[1], to: trackingPoints[2] },
    { from: trackingPoints[2], to: trackingPoints[3] },
    { from: trackingPoints[3], to: trackingPoints[4] },
    { from: trackingPoints[4], to: trackingPoints[5] },
    { from: trackingPoints[5], to: trackingPoints[0] },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="animatedGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <motion.path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  animate={{
                    strokeOpacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </pattern>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#animatedGrid)" />
            <rect width="100%" height="100%" fill="url(#mapGradient)" />
          </svg>
        </div>

        {/* Animated Continent Outlines */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M20,20 Q25,15 30,20 Q35,25 40,20 Q45,15 50,20 Q55,25 60,20 Q65,15 70,20 Q75,25 80,20"
              fill="none"
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="1"
              animate={{
                pathLength: [0, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M15,40 Q20,35 25,40 Q30,45 35,40 Q40,35 45,40 Q50,45 55,40"
              fill="none"
              stroke="rgba(6, 182, 212, 0.4)"
              strokeWidth="1"
              animate={{
                pathLength: [0, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Animated Routes */}
      {routes.map((route, index) => (
        <motion.div
          key={`route-${index}`}
          className="absolute"
          style={{
            left: `${Math.min(route.from.x, route.to.x)}%`,
            top: `${Math.min(route.from.y, route.to.y)}%`,
            width: `${Math.abs(route.to.x - route.from.x)}%`,
            height: `${Math.abs(route.to.y - route.from.y)}%`,
          }}
        >
          <motion.div
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          />
          {/* Traveling Dot */}
          <motion.div
            className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-lg"
            animate={{
              x: ['0%', '100%'],
              y: ['0%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 border border-yellow-300 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Enhanced GPS Tracking Points */}
      {trackingPoints.map((point, index) => (
        <motion.div
          key={index}
          className={`absolute w-3 h-3 bg-${point.color}-400 rounded-full shadow-lg`}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: point.delay * 0.3,
            ease: "easeInOut",
          }}
        >
          {/* Multiple Signal Rings */}
          <motion.div
            className={`absolute -inset-2 border-2 border-${point.color}-400 rounded-full`}
            animate={{
              scale: [0, 4, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: point.delay * 0.3,
              ease: "easeOut",
            }}
          />
          <motion.div
            className={`absolute -inset-1 border border-${point.color}-300 rounded-full`}
            animate={{
              scale: [0, 3, 0],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: point.delay * 0.3 + 0.5,
              ease: "easeOut",
            }}
          />
          <motion.div
            className={`absolute -inset-3 border border-${point.color}-200 rounded-full`}
            animate={{
              scale: [0, 2, 0],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: point.delay * 0.3 + 1,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}

      {/* Enhanced Satellite Animation */}
      <motion.div
        className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-xl"
        animate={{
          x: [0, 200, 400, 600, 800, 1000, 800, 600, 400, 200, 0],
          y: [100, 150, 120, 80, 130, 90, 160, 110, 140, 95, 100],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 border-2 border-blue-300 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          animate={{
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Enhanced Location Marker */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-6 h-6"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-red-500 to-pink-500 rounded-full shadow-2xl relative">
          <motion.div
            className="absolute -top-2 -left-2 w-10 h-10 border-2 border-red-400 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-600 to-pink-600 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-90"></div>
        </div>
      </motion.div>

      {/* Additional Floating Particles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}


    </div>
  );
};

export default AnimatedBackground;
