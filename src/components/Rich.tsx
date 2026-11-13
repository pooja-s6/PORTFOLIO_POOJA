const Rich = ({ text }: { text: string }) => (
  <>
    {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
      part.startsWith('**') && part.endsWith('**') ? (
        <strong key={index} className="font-semibold text-fg">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      ),
    )}
  </>
);

export default Rich;
