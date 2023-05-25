let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
// let passimg1 = document.querySelector("#passimg1")
let passimg2 = document.querySelector("#passimg2")
let passimg3 = document.querySelector("#passimg3")
let passimg4 = document.querySelector("#passimg4")
let passimg5 = document.querySelector("#passimg5")

onload = () => {
    var 쿼리스트링 = new URLSearchParams(window.location.search)
    let text = 쿼리스트링.get('id')
    if(text === '서울') {
        $(pass1).append('서울 전 지역')
        pass2.textContent = '서울 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F1.jpg?alt=media&token=ecc22b43-c6eb-4c3a-aff8-fa208fa7d10b'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F10.jpg?alt=media&token=3f7ff1c7-2b54-4e10-96fe-e7cad3e1341f'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F11.jpg?alt=media&token=e96da5e7-e541-4cbd-8e8d-36dddc5bca1d'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F12.jpg?alt=media&token=62c14a73-c295-4c82-af32-cb6321b53655'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F001.png?alt=media&token=23593058-f2bb-4165-a270-f334d7d3c6a4'
    }
    if(text === '부산') {
        $(pass1).append('부산 전 지역')
        pass2.textContent = '부산 전 지역을'
       
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F13.jpg?alt=media&token=b99faa72-2d9e-43c6-98b7-1977c32b8ab2'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F14.jpg?alt=media&token=b23265cc-e2e3-4c3f-8a38-8ab93976c880'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F15.jpg?alt=media&token=b6643672-a144-4eab-932d-bd5a05dda0a1'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F16.jpg?alt=media&token=9f6fa146-302a-493c-8032-e6b710b33004'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F002.png?alt=media&token=b575897c-18f2-4375-9c51-f02ff5c55aef'
    }
    if(text === '대구') {
        $(pass1).append('대구 전 지역')
        pass2.textContent = '대구 전 지역을'
        
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F17.jpg?alt=media&token=f2a80b92-a820-4bb5-97c3-6deefeb949a7'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F18.jpg?alt=media&token=e48613c7-06f2-412a-a4fd-d7a38b6517c4'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F19.jpg?alt=media&token=1e045ba4-3860-4a73-be71-47e65b0e97f5'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F2.jpg?alt=media&token=203a45bd-184c-492d-b458-54032a98319b'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F003.png?alt=media&token=3f490f74-1aeb-4286-aa9a-0adc4bfb104e'
    }
    if(text === '인천') {
        $(pass1).append('인천 전 지역')
        pass2.textContent = '인천 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F20.jpg?alt=media&token=62b50036-968e-4db4-90c2-7366e2f6b512'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F21.jpg?alt=media&token=2c47cd84-fd25-4406-84dd-645d7e7cec81'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F22.jpg?alt=media&token=74d55299-37f3-46c2-9448-04020cce97c9'
        passimg5.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F23.jpg?alt=media&token=4da9f692-9564-413d-94e2-77341fecb2d3'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F004.png?alt=media&token=df57fd93-1584-4042-8aa0-b6d01f1f2791'
    }
    if(text === '광주') {
        $(pass1).append('광주 전 지역')
        pass2.textContent = '광주 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F24.jpg?alt=media&token=2de14ddc-68a8-4f1d-8cd1-56cd25df5006'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F25.jpg?alt=media&token=1db3b6c8-35de-4ce6-8f83-246b31ba2352'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F26.jpg?alt=media&token=d2e2f218-f139-4b55-aeae-56983575721b'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F005.png?alt=media&token=3b7f4da7-9dad-4eb9-a16e-9d5dc0815593'
    }
    if(text === '대전') {
        $(pass1).append('대전 전 지역')
        pass2.textContent = '대전 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F28.jpg?alt=media&token=90f55a2b-00b0-4478-ba5c-7f982593b6c9'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F29.jpg?alt=media&token=912a0321-a799-422f-ba03-11f38b8ea663'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F3.jpg?alt=media&token=b068b175-6850-47b2-8a47-d14c2c3e3597'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F006.png?alt=media&token=64c70af5-6a02-4b45-bdd5-893d3bdd9596'
    }
    if(text === '울산') {
        $(pass1).append('울산 전 지역')
        pass2.textContent = '울산 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F31.jpg?alt=media&token=8158b900-d9ae-4976-bb9d-489db15f7750'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F32.jpg?alt=media&token=21b7f649-2325-4105-97fa-c82e4ed6a408'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F33.jpg?alt=media&token=c64b49d5-1a1c-4682-8176-0f5b23996f04'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F007.png?alt=media&token=6c51f011-ee3d-4cb5-bf72-cce36fb89fe6'
    }
    if(text === '경기') {
        $(pass1).append('경기 전 지역')
        pass2.textContent = '경기 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F35.jpg?alt=media&token=bbdaec92-f941-4fad-b2b7-89d799951ce4'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F36.jpg?alt=media&token=69798d5d-4e4d-407e-b513-21057fb9c9da'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F37.jpg?alt=media&token=277bdd2a-68be-4c7b-bd65-a9b954b0c092'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F008.png?alt=media&token=d2ca1848-06e9-4769-aef6-84429869ee37'
    }
    if(text === '강원') {
        $(pass1).append('강원 전 지역')
        pass2.textContent = '강원 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F39.jpg?alt=media&token=4227a6ef-20a1-49d3-8f7a-53586a2d60c9'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F4.jpg?alt=media&token=c5000bb8-94cf-4466-a8e8-695ab6ba90b5'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F40.jpg?alt=media&token=620e3e16-d724-487f-b3f4-6a6beb5f84f9'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F009.png?alt=media&token=fb718fdf-8cd9-4ca4-9fa0-b5ef279648e7'
    }
    if(text === '충북') {
        $(pass1).append('충북 전 지역')
        pass2.textContent = '충북 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F42.jpg?alt=media&token=dc682aa4-999d-43d3-9d92-e18580a96a09'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F43.jpg?alt=media&token=9ac3ce0b-e62e-4978-b9b0-13b5c612a572'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F44.jpg?alt=media&token=fa170415-dc8a-463e-b586-45e4bd5a3280'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F010.png?alt=media&token=ceb796a5-5a67-44ff-a11b-270a8ce2835c'
    }
    if(text === '충남') {
        $(pass1).append('충남 전 지역')
        pass2.textContent = '충남 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F46.jpg?alt=media&token=11aa49b5-dd18-4195-9d56-932e7bbee62c'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F47.jpg?alt=media&token=f80dcd5c-99f7-4c4c-b2a3-3fe71648145e'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F48.jpg?alt=media&token=1543edd5-e491-45e0-9ca3-de2292cc07a3'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F011.png?alt=media&token=fe1973c4-f93b-4ac1-a4a9-f225ee85a8f7'
    }
    if(text === '전북') {
        $(pass1).append('전북 전 지역')
        pass2.textContent = '전북 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F5.jpg?alt=media&token=275ada39-37c1-4f08-a6d2-0f41bbabf994'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F50.jpg?alt=media&token=2fa9baea-da80-4c0c-b0a6-f4b9d8853dbd'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F51.jpg?alt=media&token=12e6355f-4b78-44d4-bcd1-49c856bfe49f'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F012.png?alt=media&token=80eb58a7-e85e-412d-98f7-c1941d31ec43'
    }
    if(text === '전남') {
        $(pass1).append('전남 전 지역')
        pass2.textContent = '전남 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F53.jpg?alt=media&token=267d8b96-9276-4646-8ef3-0937938f0ec1'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F54.jpg?alt=media&token=d37a786b-9319-4752-8f83-5b99807c8f3d'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F55.jpg?alt=media&token=66ebf081-7821-425f-996c-56943d69600e'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F013.png?alt=media&token=548abaff-01c6-427f-a433-16488e865089'
    }
    if(text === '경북') {
        $(pass1).append('경북 전 지역')
        pass2.textContent = '경북 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F7.jpg?alt=media&token=f61237a1-9f55-4f24-8470-949b826010f4'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F8.jpg?alt=media&token=69773340-ae8c-458e-b64f-3892e1a22c38'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F9.jpg?alt=media&token=eeef4554-4a31-45fd-88f9-29c02c0243a1'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F014.png?alt=media&token=41ce34aa-b898-4ccd-bc12-e0d31b888b0a'
    }
    if(text === '경남') {
        $(pass1).append('경남 전 지역')
        pass2.textContent = '경남 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F45.jpg?alt=media&token=35388fa3-c8e2-4d41-a12d-102dfc74e183'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F6.jpg?alt=media&token=ead826f2-4aa9-4114-9ad9-b512f22907a4'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F52.jpg?alt=media&token=9140f1d2-b1b5-4efa-9a17-abca1fb1cf85'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F015.png?alt=media&token=4c61192d-ab98-4457-bafa-9616a75fb74c'
    }
    if(text === '세종') {
        $(pass1).append('세종 전 지역')
        pass2.textContent = '세종 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F49.jpg?alt=media&token=f7fd363e-9f29-411e-a6f7-e81d65b5d77e'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F41.jpg?alt=media&token=2150ca35-bb9f-48fc-9cc0-391fbe713bcd'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F38.jpg?alt=media&token=5a1e68e9-30ac-4b58-a200-8cc1619b777c'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F016.png?alt=media&token=99140729-7c2a-4cc7-857e-daf49b03f27b'
    }
    if(text === '제주') {
        $(pass1).append('제주 전 지역')
        pass2.textContent = '제주 전 지역을'
        passimg2.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F34.jpg?alt=media&token=0f8718ad-5033-47a6-8ba1-86be5affe5fc'
        passimg3.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F30.jpg?alt=media&token=ff729aed-0352-4eb6-a23a-5ee87f0f9eaf'
        passimg4.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F27.jpg?alt=media&token=5a693e7b-b6f9-44cf-9e04-622b018a1062'
        // passimg1.src = 'https://firebasestorage.googleapis.com/v0/b/test-dcfbe.appspot.com/o/tzen%2F%EC%A7%80%EC%97%AD%EB%B3%84%EB%A9%94%EC%9D%B8ojowa%2F017.png?alt=media&token=2422bcc0-44e5-4c93-a36e-1bada76db66f'
    }
}