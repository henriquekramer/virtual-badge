const linksSocialMedia = {
  github: "henriquekramer",
  youtube: "channel/UCGYgxYnlCcTQKFMwb6rM1LQ",
  facebook: "maykbrito",
  instagram: "kramerhenrique",
  twitter: "hkramer_"
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute("class")
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfilesInfos(){
 const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPhoto.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfilesInfos()