import Link from "next/link";

const resumeLink = process.env.RESUME_URL ?? ''

export default function Resume(props: { isHome?: boolean }) {
    return (
        <div className="flex items-center flex-col justify-center">
            <Link href={resumeLink}>
                <button className="btn btn-gradient btn-sm btn-primary">
                    <span className="icon-[tabler--file-text] size-5" />
                    Get My Resume
                </button>
            </Link>
            
            { props.isHome &&
                <span className="mt-2 text-sm"><em>Or check the <Link href="/career"><u>Career</u></Link> page.</em></span>
            }
        </div>
    );
  }
