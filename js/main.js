$(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > $('.navbar').height()) {
      if (!$('.navbar').hasClass('fixed')) {
        $('.navbar').addClass('fixed')
      }
    } else {
      $('.navbar').removeClass('fixed')
    }
  })

  $('body').css('paddingTop', $('.navbar').height())

  // tabs
  $('.tabs-switch li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.tab-content div').hide()
    $('.' + $(this).data('class')).fadeIn(500)
    $('.tabs img').hide()
    $('.' + $(this).data('img')).fadeIn(500)
  })
})

// scroll to top
let scrollBtn = document.querySelector('.scroll-to-top')

window.addEventListener('scroll', function () {
  this.scrollY >= 200
    ? (scrollBtn.style.right = '20px')
    : (scrollBtn.style.right = '-60px')
})

scrollBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})