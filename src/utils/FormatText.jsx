

function format(text) {
  
    const regex = /<strong>(.*?)<\/strong>/gi;
    
    return text.split(regex).map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  }
  

const FormatText = ({text}) => {
    return <>{format(text)}</>;
}

export default FormatText;
  