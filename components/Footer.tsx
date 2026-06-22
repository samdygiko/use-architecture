export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-24 md:mt-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-8 py-6 md:py-8 text-[12px] md:text-[13px] text-ink/80 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p>
          JH Hagan, Director, <span className="text-ink">USE•Architecture</span>
        </p>
        <p className="tabular-nums">
          <a href="tel:+447939567345" className="text-ink">
            m. 0044 7939 567345
          </a>
        </p>
      </div>
    </footer>
  );
}
