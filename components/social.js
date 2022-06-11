import { mdiLinkedin, mdiTwitter, mdiInstagram, mdiGithub  } from '@mdi/js'

import { meta } from '../site.config'

import Icon from './icon'

function SocialButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
      flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 transition-colors
      hover:bg-opacity-75
      dark:bg-zinc-700 dark:text-zinc-200"
    >
      {children}
    </a>
  )
}

function Social() {
  const { email } = meta.author
  const { twitter, linkedin, github, instagram } = meta.social

  return (
    <div className="flex justify-center space-x-2">
      <SocialButton href={`mailto:${email}`}>
        <span className="mx-2 font-semibold">Email</span>
      </SocialButton>

      <SocialButton href={twitter}>
        <Icon icon={mdiTwitter} title="Twitter" />
      </SocialButton>

      <SocialButton href={github}>
        <Icon icon={mdiGithub} title="GitHub" />
      </SocialButton>

      <SocialButton href={linkedin}>
        <Icon icon={mdiLinkedin} title="Linkedin" />
      </SocialButton>

      <SocialButton href={instagram}>
        <Icon icon={mdiInstagram} title="Instagram" />
      </SocialButton>
    </div>
  )
}

export default Social
