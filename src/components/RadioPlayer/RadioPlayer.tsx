import { TwitchEmbed } from 'react-twitch-embed';

interface TwitchPlayerProps {
  channel: string;
}

export function Player(props: TwitchPlayerProps) {
  const { channel } = props;

  return (
    <div>
      <TwitchEmbed
        channel={channel} // Usa la variable de la prop 'channel'
      />
    </div>
  );
}






// import ReactAudioPlayer from 'react-audio-player';

// interface RadioPlayerProps {
//   streamUrl: string;
// }

// const RadioPlayer: React.FC<RadioPlayerProps> = ({ streamUrl }) => {
//   return (
//     <div className="flex flex-col items-end">
//       <h2 className='text-[#36B776] font-bold'>Escúchanos en vivo</h2>
//       <ReactAudioPlayer src={streamUrl} autoPlay controls />
//     </div>
//   );
// };
