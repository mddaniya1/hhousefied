import React, { useEffect, useState, useRef } from 'react';

export const StatisticsSection: React.FC = () => {
  const [counts, setCounts] = useState({
    followers: 0,
    homes: 0,
    rating: '0.0',
    execution: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate followers to 11
          let f = 0;
          const fTimer = setInterval(() => {
            f += 1;
            if (f >= 11) {
              f = 11;
              clearInterval(fTimer);
            }
            setCounts((prev) => ({ ...prev, followers: f }));
          }, 60);

          // Animate homes to 50
          let h = 0;
          const hTimer = setInterval(() => {
            h += 2;
            if (h >= 50) {
              h = 50;
              clearInterval(hTimer);
            }
            setCounts((prev) => ({ ...prev, homes: h }));
          }, 35);

          // Animate execution to 100
          let e = 0;
          const eTimer = setInterval(() => {
            e += 4;
            if (e >= 100) {
              e = 100;
              clearInterval(eTimer);
            }
            setCounts((prev) => ({ ...prev, execution: e }));
          }, 30);

          // Rating fixed to 5.0
          setCounts((prev) => ({ ...prev, rating: '5.0' }));
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="px-6 sm:px-10 lg:px-14 py-8 sm:py-12 max-w-[1360px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 text-left">
        
        {/* Stat 1: 11K+ -> Facebook Followers */}
        <div className="flex flex-col">
          <div className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] tracking-[-0.03em] leading-none">
            {counts.followers}K+
          </div>
          <span className="text-[12px] sm:text-[13px] text-[#5C5C5C] mt-2 font-normal">
            Facebook Followers
          </span>
        </div>

        {/* Stat 2: 50+ -> Completed Homes */}
        <div className="flex flex-col">
          <div className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] tracking-[-0.03em] leading-none">
            {counts.homes}+
          </div>
          <span className="text-[12px] sm:text-[13px] text-[#5C5C5C] mt-2 font-normal">
            Completed Homes
          </span>
        </div>

        {/* Stat 3: 5.0 -> Google Rating (9 Verified Reviews) */}
        <div className="flex flex-col">
          <div className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] tracking-[-0.03em] leading-none">
            {counts.rating}
          </div>
          <span className="text-[12px] sm:text-[13px] text-[#5C5C5C] mt-2 font-normal">
            Google Rating (9 Verified Reviews)
          </span>
        </div>

        {/* Stat 4: 100% -> Dedicated Execution */}
        <div className="flex flex-col">
          <div className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#111111] tracking-[-0.03em] leading-none">
            {counts.execution}%
          </div>
          <span className="text-[12px] sm:text-[13px] text-[#5C5C5C] mt-2 font-normal">
            Dedicated Execution
          </span>
        </div>

      </div>
    </section>
  );
};
