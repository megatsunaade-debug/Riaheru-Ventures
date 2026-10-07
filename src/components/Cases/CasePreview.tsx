import type { CaseStudy } from '@/data/cases';

type CasePreviewProps = {
    caseStudy: CaseStudy;
    className?: string;
    fit?: 'cover' | 'contain';
};

export function CasePreview({ caseStudy, className = '', fit = 'cover' }: CasePreviewProps) {
    return (
        <div className={`relative min-w-0 overflow-hidden rounded-lg border border-slate-200/80 ${fit === 'contain' ? 'bg-[#0b1020]' : 'bg-slate-200'} ${className}`}>
            {caseStudy.kind === 'site' && caseStudy.preview ? (
                <picture className="absolute inset-0 block h-full w-full">
                    {caseStudy.preview.avif && <source srcSet={caseStudy.preview.avif} type="image/avif" />}
                    <img
                        src={caseStudy.preview.src}
                        alt={caseStudy.preview.alt}
                        loading="lazy"
                        decoding="async"
                        width={1348}
                        height={926}
                        className={fit === 'contain' ? 'h-full w-full object-contain object-top' : 'h-full w-full object-cover object-top'}
                    />
                </picture>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-3 sm:p-4" aria-hidden="true">
                    <div className="flex h-full flex-col overflow-hidden rounded-md border border-slate-300/80 bg-slate-50 shadow-sm">
                        <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-slate-200 px-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                            <span className="ml-auto h-1.5 w-1/4 rounded-full bg-slate-200" />
                        </div>
                        {caseStudy.kind === 'site' ? (
                            <div className="grid min-h-0 flex-1 grid-cols-5 gap-3 p-4">
                                <div className="col-span-3 flex min-w-0 flex-col justify-center gap-3">
                                    <span className="h-2 w-1/3 rounded-full bg-slate-300" />
                                    <span className="h-4 w-4/5 rounded bg-slate-300/80" />
                                    <span className="h-2 w-full rounded-full bg-slate-200" />
                                    <span className="h-2 w-3/4 rounded-full bg-slate-200" />
                                    <span className="mt-2 h-5 w-2/5 rounded bg-slate-300" />
                                </div>
                                <div className="col-span-2 rounded-md bg-slate-200" />
                            </div>
                        ) : (
                            <div className="flex min-h-0 flex-1 items-center justify-center p-4">
                                <div className="h-16 w-16 rounded-lg border border-slate-200 bg-slate-100" />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
