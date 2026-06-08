function isEmpty(obj: Record<string, any> | any[]): boolean {
    if (Object.keys(obj).length == 0) {
        return true;
    }
    else {
        return false;
    }
};