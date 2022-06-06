var waitModal = document.querySelector('.wait-modal')
var signUp = document.getElementById('sign-up-btn')
console.log(waitModal,signUp)
signUp.onclick = function () {
    waitModal.innerHTML = `
    <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__body">
                <div class="auth-form">
                    <div class="auth-form__container">
                        <div class="auth-form__header">
                            <div class="auth-form__heading">Đăng ký</div>
                            <span class="auth-form__switch-btn">Đăng nhập</span>
                        </div>
                        <div class="auth-form__form">
                            <div class="auth-form__group">
                                <input type="text" class="auth-form__input" placeholder="Email">
                            </div>                        
                            <div class="auth-form__group">
                                <input type="password" class="auth-form__input" placeholder="Mật khẩu">
                            </div>                        
                            <div class="auth-form__group">
                                <input type="password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
                            </div>
                        </div>
                        <div class="auth-form__aside">
                            <p class="auth-form__policy-text">
                                Bằng việc đăng ký, bạn đồng ý với Shoppe về
                                <a href="" class="auth-form__policy-link">Điều khoản dịch vụ</a> & 
                                <a href="" class="auth-form__policy-link">Chính sách bảo mật</a>
                            </p>
                        </div>
                        <div class="auth-form__controls">
                            <button class="btn" id="comback">TRỞ LẠI</button>
                            <button class="btn btn--primary">ĐĂNG KÝ</button>
                        </div>
                    </div>
                    <div class="auth-form__socials">
                        <a href="" class="btn btn--with-icon btn-fb">
                            <i class="fab fa-facebook-square"></i>
                            Kết nối với Facebook
                        </a>
                        <a href="" class="btn btn--with-icon btn-gg">
                            <i class="fab fa-google"></i>
                            Kết nối với Google
                        </a>
                    </div>
                </div>
        </div>
    </div>
    `
    document.getElementById('comback').onclick = function () {
        waitModal.innerHTML = ''
    }
}
