import s from "./_coinlist.module.scss";


const Skeleton = () => {
    return (
        <svg className={s.skeleton}
            role="img"
            width="1300"
            height="40"
            aria-labelledby="loading-aria"
            viewBox="0 0 1300 40"
            preserveAspectRatio="none"
        >
            <title id="loading-aria">Loading...</title>
            <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                clipPath="url(#clip-path)"
                fill="grey"
                style={{ fill: "#fill" }}
            ></rect>
            <defs>
                <clipPath id="clip-path">

                    <rect x="0" y="5" rx="5" ry="5" width="150" height="30" />
                    <rect x="250" y="5" rx="5" ry="5" width="150" height="30" />
                    <rect x="500" y="5" rx="5" ry="5" width="150" height="30" />
                    <rect x="740" y="5" rx="5" ry="5" width="100" height="30" />
                    <rect x="990" y="5" rx="5" ry="5" width="100" height="30" />
                </clipPath>
            </defs>
        </svg>
    )
};

export default Skeleton;

