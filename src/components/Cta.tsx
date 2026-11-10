import type { FC } from "react";

interface CtaButton {
    label: string;
    href: string;
}

export interface CtaProps {
    title: string;
    description: string;
    primaryButton?: CtaButton;
    secondaryButton?: CtaButton;
    image?: string;
    className?: string;
}

const Cta: FC<CtaProps> = ({
                               title,
                               description,
                               primaryButton,
                               secondaryButton,
                               image,
                               className = "",
}) => {

    const hasImage = Boolean(image && image.trim() !== "");

    return (
        <div className="w-full px-4 md:px-6">
            <section
                className={`mt-10 relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border-4 border-brand-cyan ${
                    hasImage ? "bg-cover bg-center" : "bg-brand-beige"
                } ${className}`}
                style={hasImage ? { backgroundImage: `url(${image})` } : undefined}
            >
                {hasImage && (
                    <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
                )}

                <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-16 text-center md:py-20">
                    <h2
                        className={`text-3xl font-normal md:text-4xl ${
                            hasImage ? "text-white" : "text-black"
                        }`}
                    >
                        {title}
                    </h2>

                    <p
                        className={`max-w-3xl text-sm leading-relaxed ${
                            hasImage ? "text-white" : "text-black"
                        }`}
                    >
                        {description}
                    </p>

                    {(primaryButton || secondaryButton) && (
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {primaryButton && (
                                <a
                                    href={primaryButton.href}
                                    className="rounded-md bg-brand-cyan px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
                                >
                                    {primaryButton.label}
                                </a>
                            )}
                            {secondaryButton && (
                                <a
                                    href={secondaryButton.href}
                                    className="rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-100"
                                >
                                    {secondaryButton.label}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Cta;