# SSPS HCMUT

## Lệnh terminal
### Setup mới vào
```
 npm install   
```
### Chạy
- Development
```
npm run nodemon     // reload khi chỉnh code server
<!-- Split terminal -->
npm run webpack-watch   // webpack rerender khi chỉnh code front-end
```
- Production
```
npm run build
npm run start
```

### Luồng Git
- Nhánh chính là `main` và `origin/main`
- Mỗi bạn có một nhánh `${tên mình}`
#### Code một mình
- Fetch `origin/main` rồi từ đó checkout ra nhánh `${tên mình}` khi mới clone code về, hoặc reset --hard nhánh `${tên mình}` về `origin/main` mỗi khi bắt đầu task mới.
- Trên nhánh `${tên mình}`, code xong commit, fetch origin, rebase nhánh mình lên `origin/main` bằng lệnh `git rebase origin/main ${tên mình}`
- Đến khi nào xong task của mình, update `main` cho lên cùng `origin/main`, rồi nhảy qua `main` merge `${tên mình}` lên `main` rồi push (lưu ý là push thường không force) lên origin/main.
    - Ngoại lệ: nếu lúc push github trả về lỗi conflict thì phải reset --hard `main` về `origin/main`, trở về nhánh `${tên mình}`, rebase lên `main`, rồi nhảy qua `main`, merge `${tên mình}` rồi push. Fail nữa thì làm lại cái ngoại lệ cho đến khi push xong
- Quay về `${tên mình}`, reset --hard về `origin/main` rồi chuyển sang code task khác

#### Code 2 bạn
- 2 bạn tự tạo một nhánh tính năng (ví dụ tên: `feature/print`) từ `main`, đẩy lên tạo `origin/feature/print`, rồi hai người cùng code trên một nhánh đó.
- Bạn nào code xong trên `${nhánh tính năng}` thì commit rồi fetch `origin/${nhánh tính năng}` về, rebase `${nhánh tính năng}` lên `origin/${nhánh tính năng}` rồi push force lên. Lưu ý do push force nên phải báo lên bạn còn lại là mình push để nó chờ mình push xong rồi mới fetch về, rebase rồi push của nó. Chứ không báo thì thằng đầu push force, thằng sau push force mất code.
