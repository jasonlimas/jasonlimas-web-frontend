import './links.scss'
import { Instagram, Facebook, LinkedIn, GitHub } from '@material-ui/icons'

export default function Links() {
  return (
    <div className='links'>
        <a href='https://www.instagram.com/jasonandrea14/' target='_blank'>
            <Instagram className='icon' />
        </a>
        <a href="https://www.facebook.com/jasonlimas14/" target='_blank'>
            <Facebook className='icon' />
        </a>
        <a href="https://www.linkedin.com/in/jason-andrea-limas/" target='_blank'>
            <LinkedIn className='icon' />
        </a>
        <a href="https://github.com/jasonlimas" target='_blank'>
            <GitHub className='icon' />
        </a>
    </div>
  )
}
