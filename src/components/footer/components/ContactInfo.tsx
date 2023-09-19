interface ContactInfoProps {
  text: string[];
}

export function ContactInfo(props: ContactInfoProps) {
  const { text } = props;
  return (
    <div className="flex flex-col justify-center gap-2">
      {text.map((t) => (
        <p key={t}>{t}</p>
      ))}
    </div>
  );
}
