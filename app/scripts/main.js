$(document).ready(function() {
  function showDropdown(dropdown) {
  	hideDropdown($('.dropdown-menu.open'));
		$('.header-nav-link.active').removeClass('active');
    dropdown.addClass('fadeIn').addClass('open').one('animationend', function() {
      $(this).removeClass('fadeIn');
    });
  };

  function hideDropdown(dropdown) {
    dropdown.addClass('fadeOut').one('animationend', function() {
      $(this).removeClass('fadeOut').removeClass('open');
    })
  };

  function hideModal() {
    const video = $('#modal-video iframe');
    if (video.length) {
      video.attr('src', video.attr('src'));
    }
    $('body').removeClass('modal-open');
    $('.modal-wrap').removeClass('show-modal');
    $('.modal-overlay').remove();
  };

  function showModal(modalSelector) {
    if (Object.keys(modalSelector).length) {
      $('body').addClass('modal-open');
      modalSelector.addClass('show-modal');
      modalSelector.after('<div class="modal-overlay"></div>');
    }
  };

  $('.header-nav-link').on('click', function(event) {
    const dropdown = $(this).parent().find('.dropdown-menu');
    const isDropdownOpen = dropdown.hasClass('open');

    if (dropdown.length) {
      event.preventDefault();
      isDropdownOpen ? hideDropdown(dropdown) : showDropdown(dropdown);
      $(this).toggleClass('active');
    }
  });

  $(document).on('click', function(event) {
    if (!$(event.target).is($('.header-nav-link')) && $('.header-nav-link').has(event.target).length === 0) {
      hideDropdown($('.dropdown-menu.open'));
			$('.header-nav-link.active').removeClass('active');
    }
  });

  $('.btn-modal').on('click', function(event) {
    event.preventDefault();
    showModal($(`.modal-wrap#${$(this).data('modal')}`));
  });

  $('.modal-wrap .close-modal').on('click', function(event) {
    event.preventDefault();
    hideModal();
  });

  $('.modal-wrap').on('click', function(event) {
    if (!$(event.target).is($('.modal')) && $('.modal').has(event.target).length === 0) {
      hideModal();
    }
  });

  $('.lang-chooser-link').on('click', function() {
  	const currentLang = $('.current-lang').html();
  	const choosenLang = $(this).html();

  	$('.current-lang').html(choosenLang + '<i class="fas fa-chevron-down"></i>');
  	$(this).html(currentLang);
  	$(this).find('.fa-chevron-down').remove();
  })

  particlesJS.load('polygon-dots', '../particles.json');
});
