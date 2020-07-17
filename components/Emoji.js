export default ({ label, children }) => {
    return (
        <span role="img" aria-label={label}>
            {children}
        </span>
    );
};
