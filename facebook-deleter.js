setInterval(() => {
  const $edit = document.querySelectorAll(`div[aria-label="Actions for this post"]`);

  const $delete = Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Delete post');
  const $trash = Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Move to trash');
  const $removeTag = Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Remove tag');
  const $hide = Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Hide from profile');

  const $confirmMove = document.querySelector('div[aria-label="Move"][role="button"][tabindex="0"] span');
  const $confirmDelete = document.querySelector('div[aria-label="Delete"][role="button"][tabindex="0"] span');
  const $OK = document.querySelector('div[aria-label="OK"][role="button"][tabindex="0"] span');
 
  if ($confirmDelete || $confirmMove || $OK) {
    if ($confirmDelete) {
      $confirmDelete.click();
    }
    if ($confirmMove) {
      $confirmMove.click();
    }
    if ($OK) {
    	$OK.click();
  	}
  }
  else if ($delete || $trash || $removeTag || $hide) {
    if ($delete) {
      $delete.click()
    }
    else if ($trash) {
      $trash.click()
    }
    else if ($removeTag) {
      $removeTag.click()
    }
    else if ($hide) {
      $hide.click()
    }
  }
  else if ($edit.length > 1) { 
    const $button = $edit[1];
    $button.click();
  }
  else {
    window.scrollTo(0, document.body.scrollHeight);
  }
}, 1000);