function Iterator(element) {
    this.current = element.firstElementChild;
    this.hasNext = function () {
        return this.current != null;
    };
    this.next = function () {
        var res = this.current;
        if (this.current.children.length != 0)this.current = this.current.firstElementChild;
        else if (this.current.nextElementSibling != null) this.current = this.current.nextElementSibling;
        else this.current = this.current.parentElement.nextElementSibling;
        return res;
    }
}
