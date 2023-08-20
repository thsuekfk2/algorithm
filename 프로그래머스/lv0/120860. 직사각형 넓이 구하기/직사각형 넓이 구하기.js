function solution(dots) {
    let width = Math.max(...dots.map(a => a[0])) - Math.min(...dots.map(a => a[0]))
    let height = Math.max(...dots.map(a => a[1])) - Math.min(...dots.map(a => a[1]))
    return width * height;
}