export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Blob 1 — violet top left */}
      <div
        className="blob"
        style={{
          width: '650px',
          height: '650px',
          background: '#6C63FF',
          top: '-200px',
          left: '-200px',
          animationDuration: '8s',
        }}
      />
      {/* Blob 2 — cyan bottom right */}
      <div
        className="blob"
        style={{
          width: '550px',
          height: '550px',
          background: '#00D4FF',
          bottom: '-180px',
          right: '-180px',
          animationDuration: '10s',
          animationDelay: '3s',
        }}
      />
      {/* Blob 3 — pink center */}
      <div
        className="blob"
        style={{
          width: '450px',
          height: '450px',
          background: '#FF6B9D',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.07,
          animationDuration: '12s',
          animationDelay: '1.5s',
        }}
      />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
