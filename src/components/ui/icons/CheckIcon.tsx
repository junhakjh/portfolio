import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

type Props = {
  color?: string;
};

export default function CheckIcon({ color = '#ff9b29' }: Props) {
  return <CheckRoundedIcon sx={{ color: color }} className='mr-2' />;
}
