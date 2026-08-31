import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm text-paper/70">
              A professional BPO partner for communication, customer engagement, sales support
              and business operations.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-paper/80">
              <li><Link href="/about" className="hover:text-cyan focus-ring">About Us</Link></li>
              <li><Link href="/services" className="hover:text-cyan focus-ring">Services</Link></li>
              <li><Link href="/departments" className="hover:text-cyan focus-ring">Departments</Link></li>
              <li><Link href="/careers" className="hover:text-cyan focus-ring">Careers</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Connect</p>
            <ul className="mt-4 space-y-3 text-sm text-paper/80">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-cyan" />
                <a href="tel:+919569079118" className="hover:text-cyan focus-ring">+91 95690 79118</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-cyan" />
                <a href="mailto:kapilkushwaha047@gmail.com" className="hover:text-cyan focus-ring break-all">
                  kapilkushwaha047@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan" />
                <span>Chinhat, Lucknow, Uttar Pradesh</span>
              </li>
              <li className="pt-1">
                <Link href="/employee/login" className="hover:text-cyan focus-ring">Employee Support</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/10 pt-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Empire Communications Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-cyan focus-ring">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan focus-ring">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
