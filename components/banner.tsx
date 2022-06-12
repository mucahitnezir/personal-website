import Picture from './picture'
import Social from './social'

import { meta } from '~/site.config'

function Banner() {
  const { meetingURL } = meta

  return (
    <div className="content-small">
      <div className="space-y-6">
        <div className="text-center">
          <Picture />
        </div>

        <h1 className="text-xl font-bold text-center">
          Hi, I am Mücahit
          <br />
          Software Engineer from Turkey
        </h1>

        <p className="text-lg">
          I have been developing software since 2010. Currently working on AWS, DevOps and backend & frontend technologies. Shortly, you can call me <span className="underline">Full Stack Developer</span>.
        </p>

        <p className="text-lg">
          I am also interested in literature and poetry, especially Turkish literature.
        </p>

        <p className="text-lg">
          Meeting new people makes me happy.  You can choose a suitable time <a href={meetingURL} className="underline font-medium" target="_blank" rel="noreferrer">on my calendar</a>, if you want to meet me.
        </p>
      </div>

      <div className="mt-10">
        <Social />
      </div>
    </div>
  )
}

export default Banner
