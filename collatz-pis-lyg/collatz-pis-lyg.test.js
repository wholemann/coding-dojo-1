/*
1. 이해
    - 정수를 입력받아야한다.
    - 짝수를 입력받으면 2로 나눈다.
    -홀수를 입력받으면 3을 곱하고 1을 더한다.
    - 결과값이 1이 될때까지 반복한다.
    - 반복한 횟수를 반환해야한다.
2. 계획
    - 임의의 양수를 입력받는다.
    - 양수를 입력받으면 짝수인지 홀수인지 판별하는 조건을 만든다
    - 짝수면 2로 나눠주고 1이 아닌 홀수면 3을 곱해주고 1을 더해준다
    - 위식을 반복해주고 한번 실행될때마다 반복횟수를 +1해준다.
    - 결과값이 1이되면 반복을 멈추고 반복횟수를 반환한다.
*/

const countCollatz = (inputInt) => {
    
    isEven(inputInt)
    return 8;
}

const isEven = (inputInt) => {
    return inputInt % 2 == 0 ? true : false;
}

const calculateCollatz = (inputInt) => {
    
    return isEven(inputInt) == true ? inputInt / 2 : inputInt * 3 + 1; 
}

const replayCal = (inputInt) => {
    let cnt = 0;
    let result = inputInt;
    while(1) {
        cnt++;
        result = calculateCollatz(result);
        console.log(result);
        if(result == 1) {
            break;
        }
    }
    return cnt;
}

test('countCollatz', () => {
    expect(countCollatz(6)).toBe(8);
    expect(countCollatz(16)).toBe(4);
})

test('isEven', () => {
    expect(isEven(6)).toBe(true);
    expect(isEven(5)).toBe(false);

})

test('calculateCollatz', () => {
    expect(calculateCollatz(6)).toBe(3);
    expect(calculateCollatz(5)).toBe(6);
})

test.only('replayCal', () => {
    expect(replayCal(6)).toBe(8);
    expect(replayCal(16)).toBe(4);
})
