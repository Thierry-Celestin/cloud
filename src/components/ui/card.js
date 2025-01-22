export function Card({ children }) {
    return <div className="p-6 border border-gray-300 rounded-lg bg-white shadow-md">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <div className="font-bold text-2xl mb-2 text-gray-800">{children}</div>;
  }
  
  export function CardBody({ children }) {
    return <div className="text-gray-600">{children}</div>;
  }
  