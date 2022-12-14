export default function Landing() {
  return (
    <div
      className="w-full h-screen font-bold text-xl lg:text-4xl animate-floatIn opacity-0"
      style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}
    >
      <div
        id="english"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-text-loop1"
        style={{ animationDelay: '0.5s' }}
      >
        <p>
          <span className="italic font-normal">cape town </span>- b
          <span className="italic">o</span>rn,
        </p>
        <p>
          <span className="italic">a</span>rtist{' '}
          <span className="italic font-normal">and engineer</span>
        </p>
      </div>
      <div
        id="afrikaans"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-text-loop2"
        style={{ animationDelay: '0.5s' }}
      >
        <p>
          <span className="italic font-normal">kaapstad </span> - geb
          <span className="italic">o</span>re,
        </p>
        <p>
          kunstenaar <span className="italic font-normal">en ingeneur</span>
        </p>
      </div>
      <div
        id="xhosa"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 animate-text-loop3"
        style={{ animationDelay: '0.5s' }}
      >
        <p>
          uzalelwe <span className="italic font-normal">ekapa,</span>
        </p>
        <p>
          igcisa <span className="italic font-normal">kunye nenjineli</span>
        </p>
      </div>
    </div>
  );
}
