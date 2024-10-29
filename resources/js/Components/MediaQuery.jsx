import { useMediaQuery } from 'react-responsive';

export default function MediaQuery({ mobile, notMobile }) {
    const isMobile = useMediaQuery({ query: '(max-width:767px)' });

    return <>{isMobile ? { mobile } : { notMobile }}</>;
}
