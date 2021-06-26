export default {
    h1: (props) => ({
        render(h) {
            return (
                <h1 className="text-3xl md:text-5xl font-bold mb-4" {...props}>
                    {this.$slots.default}
                </h1>
            );
        }
    })
};
