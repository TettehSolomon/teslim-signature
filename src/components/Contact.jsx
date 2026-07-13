import Icon from './Icon'
import SocialLink from './SocialLink'
import ConnectCard from './ConnectCard'
import { socialLinks, contactDetails } from '../data/content'

export default function Contact() {
  return (
    <section className="py-24 bg-surface-container-low px-gutter" id="contact">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Connect With Luxury
              </h2>
              <p className="text-on-surface-variant max-w-lg">
                Join our exclusive community for wellness tips, new releases, and
                behind-the-scenes content of the Teslimsignature lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {socialLinks.map((social) => (
                <SocialLink key={social.platform} {...social} />
              ))}
            </div>

            <div className="pt-8 border-t border-outline-variant space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-4">
                  <Icon name={detail.icon} className="text-secondary" />
                  <div>
                    <p className="font-label-caps text-label-caps text-outline uppercase">
                      {detail.label}
                    </p>
                    <p className="text-lg font-semibold text-primary">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ConnectCard />
        </div>
      </div>
    </section>
  )
}
