function sum(arr) {
        if (!Array.isArray) {
                return null;
        }

        return arr.reduce((sum, current) => sum + current, 0);
}








