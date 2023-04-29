const data = {
  contentData : [
    {
      id: 'microsoft_hololens',
      checked: false,
      name: 'Microsoft HoloLens',
      title: 'Microsoft HoloLens'
    },
    {
      id: 'oculus_rift',
      checked: false,
      name: 'Oculus Rift',
      title: 'Oculus Rift'
    },
    { id: 'htc_vive', checked: false, name: 'HTC Vive', title: 'HTC Vive' },
    {
      id: 'ps_vr',
      checked: false,
      name: 'PlayStation VR',
      title: 'PlayStation VR'
    },
    {
      id: 'samsung_vr',
      checked: false,
      name: 'Samsung Gear VR',
      title: 'Samsung Gear VR'
    },
    {
      id: 'google_daydream',
      checked: false,
      name: 'Google Daydream View',
      title: 'Google Daydream View'
    },
    { id: 'other', checked: false, name: 'Other', title: 'Other' }
  ],
  categoryData: [
    {
      "title": "All Items",
      "id": "all_items",
      "childrens": [
        {
          "title": "Full Avatars",
          "id": "full_avatars",
          "childrens": [
            {
              "title": "Toys",
              "id": "toys",
              "path": "/toys"
            },
            {
              "title": "Animal",
              "id": "animal",
              "path": "/animal"
            },
            {
              "title": "Home Decor",
              "id": "home decor",
              "path": "/home_decor"
            },
            {
              "title": "Beauty",
              "id": "beauty",
              "path": "/beauty"
            },
            {
              "title": "Superhero",
              "id": "superhero",
              "path": "/superhero"
            }
          ]
        },
        {
          "title": "Half Avatars",
          "id": "half_avatars",
          "childrens": [
            {
              "title": "Books",
              "id": "books",
              "path": "/books"
            },
            {
              "title": "Sports",
              "id": "sports",
              "path": "/sports"
            },
            {
              "title": "Technology",
              "id": "technology",
              "path": "/technology"
            },
            {
              "title": "Electronics",
              "id": "electronics",
              "path": "/electronics"
            }
          ]
        }
      ]
    },
    {
      "title": "Others",
      "id": "others",
      "childrens": [
        {
          "title": "Fashion",
          "id": "fashion",
          "path": "/fashion"
        },
        {
          "title": "Food",
          "id": "food",
          "path": "/food"
        }
      ]
    }
  ],
  products: [
    {
      id: 1,
      title: 'Demand-driven strategy multi-tasking pricing',
      image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      price: 325,
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      rating: 4.0,
      category: 'Toys',
      seller_name: 'Diandra De Andreis',
      seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 51514,
      auto_upload: true
    },
    {
      id: 2,
      title: 'Object-based intermediate pricing structure',
      image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
      price: 139,
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      rating: 3.8,
      category: 'Animal',
      seller_name: 'Ki Lowde',
      seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      device: 'Oculus Rift',
      polygon_amount: 10022,
      auto_upload: false
    },
    {
      id: 3,
      title: 'Pre-emptive demand-driven strategy',
      image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
      price: 799,
      description:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      rating: 3.8,
      category: 'Superhero',
      seller_name: 'Willow Duligal',
      seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      device: 'Google Daydream',
      polygon_amount: 30533,
      auto_upload: false
    },
    {
      id: 4,
      title: 'Innovative real-time moratorium',
      image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      price: 106,
      description:
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      rating: 3.1,
      category: 'Superhero',
      seller_name: 'Lenard Kienlein',
      seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      device: 'HTC Vive',
      polygon_amount: 73984,
      auto_upload: true
    },
    {
      id: 5,
      title: 'Expanded stable extranet',
      image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
      price: 375,
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      rating: 3.9,
      category: 'Home Decor',
      seller_name: 'Foster Thatcher',
      seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      device: 'Google Daydream',
      polygon_amount: 32191,
      auto_upload: false
    },
    {
      id: 6,
      title: 'Persistent full-range projection',
      image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      price: 488,
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      rating: 4.0,
      category: 'Fashion',
      seller_name: 'Osbourne Brion',
      seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 84641,
      auto_upload: false
    },
    {
      id: 7,
      title: 'Streamlined executive core',
      image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
      price: 697,
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      rating: 4.5,
      category: 'Superhero',
      seller_name: 'Beulah Gore',
      seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
      device: 'PlayStation VR',
      polygon_amount: 61002,
      auto_upload: false
    },
    {
      id: 8,
      title: 'Profound coherent utilisation',
      image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      price: 108,
      description:
        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      rating: 3.3,
      category: 'Books',
      seller_name: 'Wyn Hawke',
      seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      device: 'Google Daydream',
      polygon_amount: 51133,
      auto_upload: false
    },
    {
      id: 9,
      title: 'Versatile optimizing policy',
      image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      price: 886,
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      rating: 3.5,
      category: 'Beauty',
      seller_name: 'Karim Belfit',
      seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 51255,
      auto_upload: false
    },
    {
      id: 10,
      title: 'Monitored hybrid budgetary management',
      image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
      price: 137,
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      rating: 4.0,
      category: 'Home Decor',
      seller_name: 'Bev Fealty',
      seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 45351,
      auto_upload: false
    },
    {
      id: 11,
      title: 'Reactive executive parallelism',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 86,
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      rating: 4.3,
      category: 'Food',
      seller_name: 'Fulton Andri',
      seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 12983,
      auto_upload: false
    },
    {
      id: 12,
      title: 'Fully-configurable real-time focus group',
      image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      price: 391,
      description:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      rating: 4.5,
      category: 'Beauty',
      seller_name: 'Foss Scrimshire',
      seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
      device: 'Oculus Rift',
      polygon_amount: 66057,
      auto_upload: true
    },
    {
      id: 13,
      title: 'Mandatory real-time groupware',
      image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      price: 158,
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      rating: 3.7,
      category: 'Animal',
      seller_name: 'Dimitry Gagin',
      seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      device: 'PlayStation VR',
      polygon_amount: 64224,
      auto_upload: false
    },
    {
      id: 14,
      title: 'Customizable discrete methodology',
      image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      price: 138,
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      rating: 3.3,
      category: 'Toys',
      seller_name: 'Brenna Gimenez',
      seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 8323,
      auto_upload: true
    },
    {
      id: 15,
      title: 'Exclusive stable leverage',
      image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      price: 725,
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
      rating: 4.4,
      category: 'Animal',
      seller_name: 'Dahlia Guidelli',
      seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 8558,
      auto_upload: true
    },
    {
      id: 16,
      title: 'Phased multimedia ability',
      image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      price: 471,
      description:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      rating: 4.0,
      category: 'Fashion',
      seller_name: 'Davie Bushnell',
      seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 98453,
      auto_upload: true
    },
    {
      id: 17,
      title: 'Reactive foreground initiative',
      image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
      price: 877,
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      rating: 3.1,
      category: 'Superhero',
      seller_name: 'Lina Neathway',
      seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
      device: 'HTC Vive',
      polygon_amount: 36348,
      auto_upload: true
    },
    {
      id: 18,
      title: 'Optimized cohesive parallelism',
      image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      price: 383,
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      rating: 3.5,
      category: 'Fashion',
      seller_name: 'Rosabel Killgus',
      seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
      device: 'Google Daydream',
      polygon_amount: 60853,
      auto_upload: true
    },
    {
      id: 19,
      title: 'Profit-focused static concept',
      image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      price: 292,
      description:
        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      rating: 4.1,
      category: 'Food',
      seller_name: 'Glenn Trippack',
      seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      device: 'PlayStation VR',
      polygon_amount: 49658,
      auto_upload: true
    },
    {
      id: 20,
      title: 'Compatible fault-tolerant synergy',
      image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      price: 906,
      description:
        'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      rating: 4.4,
      category: 'Beauty',
      seller_name: 'Stillman Derobert',
      seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
      device: 'Oculus Rift',
      polygon_amount: 75955,
      auto_upload: true
    },
    {
      id: 21,
      title: 'Cloned executive budgetary management',
      image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      price: 996,
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      rating: 3.7,
      category: 'Fashion',
      seller_name: 'Maryellen Gask',
      seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 44908,
      auto_upload: false
    },
    {
      id: 22,
      title: 'Exclusive contextually-based support',
      image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
      price: 935,
      description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      rating: 3.8,
      category: 'Superhero',
      seller_name: 'Andris Pariss',
      seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
      device: 'Samsung Gear VR',
      polygon_amount: 64956,
      auto_upload: true
    },
    {
      id: 23,
      title: 'Devolved 4th generation algorithm',
      image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      price: 63,
      description:
        'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      rating: 3.8,
      category: 'Toys',
      seller_name: 'Humfrid Kemster',
      seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 13941,
      auto_upload: false
    },
    {
      id: 24,
      title: 'Reverse-engineered bifurcated interface',
      image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
      price: 628,
      description:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      rating: 4.4,
      category: 'Fashion',
      seller_name: 'Lynsey Timms',
      seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
      device: 'Google Daydream',
      polygon_amount: 90420,
      auto_upload: false
    },
    {
      id: 25,
      title: 'Function-based global project',
      image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      price: 959,
      description:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      rating: 4.4,
      category: 'Toys',
      seller_name: 'Bess Sleney',
      seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
      device: 'PlayStation VR',
      polygon_amount: 88874,
      auto_upload: false
    },
    {
      id: 26,
      title: 'Horizontal bottom-line definition',
      image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      price: 152,
      description:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      rating: 3.6,
      category: 'Animal',
      seller_name: 'Harold Godlee',
      seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      device: 'HTC Vive',
      polygon_amount: 40625,
      auto_upload: true
    },
    {
      id: 27,
      title: 'Operative zero defect open architecture',
      image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      price: 722,
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      rating: 3.2,
      category: 'Books',
      seller_name: 'Edvard Aidler',
      seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      device: 'PlayStation VR',
      polygon_amount: 25410,
      auto_upload: false
    },
    {
      id: 28,
      title: 'Total motivating algorithm',
      image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      price: 333,
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      rating: 4.6,
      category: 'Home Decor',
      seller_name: 'Jamill Roads',
      seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
      device: 'HTC Vive',
      polygon_amount: 17196,
      auto_upload: true
    },
    {
      id: 29,
      title: 'Centralized content-based task-force',
      image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      price: 173,
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
      rating: 4.1,
      category: 'Beauty',
      seller_name: 'Essie Fountaine',
      seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 5641,
      auto_upload: true
    },
    {
      id: 30,
      title: 'Multi-tiered impactful concept',
      image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
      price: 191,
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      rating: 3.9,
      category: 'Toys',
      seller_name: 'Vaughn Batterham',
      seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 32855,
      auto_upload: true
    },
    {
      id: 31,
      title: 'Reverse-engineered scalable methodology',
      image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      price: 362,
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      rating: 3.9,
      category: 'Fashion',
      seller_name: 'Corabel Andreotti',
      seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 68138,
      auto_upload: true
    },
    {
      id: 32,
      title: 'Adaptive attitude-oriented product',
      image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
      price: 274,
      description:
        'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      rating: 4.7,
      category: 'Food',
      seller_name: 'Xylina Kenshole',
      seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
      device: 'Oculus Rift',
      polygon_amount: 73003,
      auto_upload: false
    },
    {
      id: 33,
      title: 'Intuitive uniform collaboration',
      image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      price: 649,
      description:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      rating: 3.1,
      category: 'Toys',
      seller_name: 'Elijah Sheaf',
      seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      device: 'Google Daydream',
      polygon_amount: 23434,
      auto_upload: true
    },
    {
      id: 34,
      title: 'Centralized optimal website',
      image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      price: 606,
      description:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      rating: 4.7,
      category: 'Fashion',
      seller_name: 'Mitchell Badgers',
      seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      device: 'Google Daydream',
      polygon_amount: 28276,
      auto_upload: true
    },
    {
      id: 35,
      title: 'Reverse-engineered responsive projection',
      image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      price: 215,
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      rating: 3.3,
      category: 'Food',
      seller_name: 'Yves McComas',
      seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 80821,
      auto_upload: true
    },
    {
      id: 36,
      title: 'Mandatory discrete archive',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 555,
      description:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      rating: 4.0,
      category: 'Food',
      seller_name: 'Tobit Demchen',
      seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
      device: 'PlayStation VR',
      polygon_amount: 10074,
      auto_upload: false
    },
    {
      id: 37,
      title: 'Centralized even-keeled access',
      image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      price: 889,
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      rating: 4.0,
      category: 'Home Decor',
      seller_name: 'Saul Jirousek',
      seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      device: 'Oculus Rift',
      polygon_amount: 54381,
      auto_upload: false
    },
    {
      id: 38,
      title: 'Versatile 5th generation matrices',
      image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
      price: 922,
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      rating: 3.6,
      category: 'Toys',
      seller_name: 'Glori Bulcock',
      seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      device: 'Google Daydream',
      polygon_amount: 18322,
      auto_upload: true
    },
    {
      id: 39,
      title: 'Integrated leading edge access',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 419,
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      rating: 4.6,
      category: 'Books',
      seller_name: 'Martita Galliard',
      seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
      device: 'Samsung Gear VR',
      polygon_amount: 5657,
      auto_upload: true
    },
    {
      id: 40,
      title: 'Pre-emptive neutral toolset',
      image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
      price: 988,
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      rating: 4.5,
      category: 'Beauty',
      seller_name: 'Luigi Ker',
      seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
      device: 'Google Daydream',
      polygon_amount: 36862,
      auto_upload: true
    },
    {
      id: 41,
      title: 'Extended dedicated benchmark',
      image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      price: 843,
      description:
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      rating: 3.9,
      category: 'Food',
      seller_name: 'Jamie Whatling',
      seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      device: 'Oculus Rift',
      polygon_amount: 42443,
      auto_upload: true
    },
    {
      id: 42,
      title: 'Phased value-added concept',
      image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
      price: 937,
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      rating: 4.7,
      category: 'Animal',
      seller_name: 'Tamas Crabb',
      seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      device: 'PlayStation VR',
      polygon_amount: 86924,
      auto_upload: true
    },
    {
      id: 43,
      title: 'Customizable multi-state budgetary management',
      image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      price: 700,
      description:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      rating: 4.8,
      category: 'Toys',
      seller_name: 'Temp Nutter',
      seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 37806,
      auto_upload: true
    },
    {
      id: 44,
      title: 'Visionary intermediate customer loyalty',
      image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      price: 299,
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      rating: 4.5,
      category: 'Animal',
      seller_name: 'Myrna Aylwin',
      seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 36263,
      auto_upload: true
    },
    {
      id: 45,
      title: 'Decentralized impactful analyzer',
      image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      price: 231,
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      rating: 4.3,
      category: 'Sports',
      seller_name: 'Molly Karpmann',
      seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
      device: 'Google Daydream',
      polygon_amount: 62737,
      auto_upload: false
    },
    {
      id: 46,
      title: 'Vision-oriented disintermediate hub',
      image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      price: 330,
      description:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      rating: 4.7,
      category: 'Home Decor',
      seller_name: 'Weider Benditt',
      seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      device: 'Oculus Rift',
      polygon_amount: 75610,
      auto_upload: true
    },
    {
      id: 47,
      title: 'Optional hybrid synergy',
      image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
      price: 760,
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      rating: 4.6,
      category: 'Home Decor',
      seller_name: 'Kliment Cecchi',
      seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      device: 'PlayStation VR',
      polygon_amount: 25173,
      auto_upload: true
    },
    {
      id: 48,
      title: 'Open-source scalable data-warehouse',
      image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      price: 390,
      description:
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      rating: 3.4,
      category: 'Home Decor',
      seller_name: 'Honey Penley',
      seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 25659,
      auto_upload: false
    },
    {
      id: 49,
      title: 'Down-sized system-worthy help-desk',
      image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      price: 302,
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      rating: 4.7,
      category: 'Animal',
      seller_name: 'Kali Hundley',
      seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 91991,
      auto_upload: true
    },
    {
      id: 50,
      title: 'Cross-platform user-facing workforce',
      image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      price: 538,
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      rating: 4.3,
      category: 'Toys',
      seller_name: 'Inga Turban',
      seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      device: 'HTC Vive',
      polygon_amount: 73790,
      auto_upload: false
    },
    {
      id: 51,
      title: 'Team-oriented 24 hour complexity',
      image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      price: 268,
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
      rating: 3.1,
      category: 'Sports',
      seller_name: 'Millicent Hamfleet',
      seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
      device: 'HTC Vive',
      polygon_amount: 53602,
      auto_upload: false
    },
    {
      id: 52,
      title: 'Organized directional alliance',
      image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      price: 105,
      description:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      rating: 3.3,
      category: 'Food',
      seller_name: 'Ranique Janusz',
      seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
      device: 'PlayStation VR',
      polygon_amount: 44753,
      auto_upload: true
    },
    {
      id: 53,
      title: 'Team-oriented 24 hour system engine',
      image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      price: 688,
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      rating: 3.0,
      category: 'Beauty',
      seller_name: 'Ilyse Hasell',
      seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 55624,
      auto_upload: true
    },
    {
      id: 54,
      title: 'Streamlined national attitude',
      image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
      price: 495,
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      rating: 4.5,
      category: 'Books',
      seller_name: 'Hubey Younie',
      seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      device: 'Oculus Rift',
      polygon_amount: 49230,
      auto_upload: false
    },
    {
      id: 55,
      title: 'Triple-buffered 3rd generation infrastructure',
      image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
      price: 347,
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      rating: 4.8,
      category: 'Toys',
      seller_name: 'Barnebas Baress',
      seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
      device: 'Samsung Gear VR',
      polygon_amount: 40209,
      auto_upload: true
    },
    {
      id: 56,
      title: 'Horizontal executive ability',
      image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
      price: 789,
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      rating: 4.1,
      category: 'Beauty',
      seller_name: 'Gordan Konzel',
      seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 8066,
      auto_upload: true
    },
    {
      id: 57,
      title: 'Multi-channelled multi-state function',
      image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      price: 597,
      description:
        'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      rating: 3.6,
      category: 'Superhero',
      seller_name: 'Karrah Ticksall',
      seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 28161,
      auto_upload: true
    },
    {
      id: 58,
      title: 'Total dynamic portal',
      image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
      price: 196,
      description:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      rating: 4.1,
      category: 'Home Decor',
      seller_name: 'Raff Berre',
      seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
      device: 'PlayStation VR',
      polygon_amount: 9398,
      auto_upload: true
    },
    {
      id: 59,
      title: 'Re-contextualized zero defect contingency',
      image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
      price: 797,
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      rating: 3.9,
      category: 'Home Decor',
      seller_name: 'Michele Woodrough',
      seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      device: 'PlayStation VR',
      polygon_amount: 8852,
      auto_upload: true
    },
    {
      id: 60,
      title: 'Digitized 6th generation standardization',
      image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
      price: 797,
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      rating: 3.7,
      category: 'Food',
      seller_name: 'Burnaby Versey',
      seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 58142,
      auto_upload: true
    },
    {
      id: 61,
      title: 'Virtual leading edge structure',
      image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
      price: 720,
      description:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      rating: 3.2,
      category: 'Sports',
      seller_name: 'Channa McGeraghty',
      seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      device: 'HTC Vive',
      polygon_amount: 99742,
      auto_upload: true
    },
    {
      id: 62,
      title: 'Reactive systematic orchestration',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 781,
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      rating: 3.3,
      category: 'Toys',
      seller_name: 'Melinde Challicombe',
      seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 59443,
      auto_upload: true
    },
    {
      id: 63,
      title: 'Versatile disintermediate encoding',
      image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
      price: 498,
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      rating: 3.7,
      category: 'Animal',
      seller_name: 'Vito Pioli',
      seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      device: 'Oculus Rift',
      polygon_amount: 84256,
      auto_upload: false
    },
    {
      id: 64,
      title: 'Function-based multimedia hierarchy',
      image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
      price: 522,
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      rating: 4.3,
      category: 'Superhero',
      seller_name: 'Jacob Yetman',
      seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 99944,
      auto_upload: true
    },
    {
      id: 65,
      title: 'Universal reciprocal middleware',
      image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      price: 812,
      description:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      rating: 4.6,
      category: 'Fashion',
      seller_name: 'Mikkel Orwin',
      seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 18387,
      auto_upload: false
    },
    {
      id: 66,
      title: 'Open-architected bi-directional task-force',
      image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
      price: 151,
      description:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      rating: 4.7,
      category: 'Books',
      seller_name: 'Emlen Adair',
      seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 23394,
      auto_upload: false
    },
    {
      id: 67,
      title: 'Proactive mobile projection',
      image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      price: 999,
      description:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      rating: 3.9,
      category: 'Superhero',
      seller_name: 'Kevina Pretsell',
      seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 46146,
      auto_upload: true
    },
    {
      id: 68,
      title: 'Cross-group methodical firmware',
      image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
      price: 254,
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      rating: 4.9,
      category: 'Beauty',
      seller_name: 'Barbara-anne Welton',
      seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 56785,
      auto_upload: false
    },
    {
      id: 69,
      title: 'Phased multimedia pricing structure',
      image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      price: 986,
      description:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      rating: 3.7,
      category: 'Superhero',
      seller_name: 'Grete Proschke',
      seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 29892,
      auto_upload: true
    },
    {
      id: 70,
      title: 'User-friendly national data-warehouse',
      image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
      price: 293,
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      rating: 4.8,
      category: 'Technology',
      seller_name: 'Mozes De Mattei',
      seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      device: 'HTC Vive',
      polygon_amount: 5394,
      auto_upload: true
    },
    {
      id: 71,
      title: 'Multi-channelled heuristic adapter',
      image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
      price: 445,
      description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
      rating: 3.4,
      category: 'Technology',
      seller_name: 'Spenser Rawood',
      seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      device: 'HTC Vive',
      polygon_amount: 82815,
      auto_upload: false
    },
    {
      id: 72,
      title: 'Exclusive 5th generation capacity',
      image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
      price: 965,
      description:
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      rating: 3.4,
      category: 'Technology',
      seller_name: 'Christian Speachley',
      seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      device: 'Google Daydream',
      polygon_amount: 41886,
      auto_upload: false
    },
    {
      id: 73,
      title: 'Seamless intangible encryption',
      image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
      price: 530,
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      rating: 3.6,
      category: 'Technology',
      seller_name: 'Loree Turone',
      seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
      device: 'HTC Vive',
      polygon_amount: 44133,
      auto_upload: true
    },
    {
      id: 74,
      title: 'Progressive context-sensitive synergy',
      image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      price: 244,
      description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      rating: 3.2,
      category: 'Sports',
      seller_name: 'Jessica Goodswen',
      seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 92999,
      auto_upload: false
    },
    {
      id: 75,
      title: 'Synergistic transitional help-desk',
      image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
      price: 502,
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      rating: 3.8,
      category: 'Food',
      seller_name: 'Ilyssa Poolman',
      seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      device: 'Oculus Rift',
      polygon_amount: 54528,
      auto_upload: true
    },
    {
      id: 76,
      title: 'Universal 5th generation utilisation',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 97,
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      rating: 3.8,
      category: 'Sports',
      seller_name: 'Loretta Bronger',
      seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
      device: 'PlayStation VR',
      polygon_amount: 8456,
      auto_upload: true
    },
    {
      id: 77,
      title: 'Mandatory dynamic initiative',
      image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
      price: 824,
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      rating: 4.2,
      category: 'Food',
      seller_name: 'Noah Pesterfield',
      seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      device: 'HTC Vive',
      polygon_amount: 93336,
      auto_upload: true
    },
    {
      id: 78,
      title: 'Robust systemic strategy',
      image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
      price: 657,
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      rating: 4.4,
      category: 'Technology',
      seller_name: 'Daile Cleevely',
      seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 10976,
      auto_upload: true
    },
    {
      id: 79,
      title: 'Up-sized modular productivity',
      image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      price: 608,
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      rating: 4.7,
      category: 'Technology',
      seller_name: 'Kristian Faas',
      seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 24260,
      auto_upload: true
    },
    {
      id: 80,
      title: 'Visionary empowering concept',
      image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      price: 192,
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      rating: 4.6,
      category: 'Home Decor',
      seller_name: "Kirstyn O'Hickey",
      seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      device: 'Google Daydream',
      polygon_amount: 34550,
      auto_upload: false
    },
    {
      id: 81,
      title: 'Triple-buffered tangible complexity',
      image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      price: 239,
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      rating: 3.4,
      category: 'Superhero',
      seller_name: 'Andee Avramow',
      seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 93577,
      auto_upload: true
    },
    {
      id: 82,
      title: 'Open-source hybrid migration',
      image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      price: 316,
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      rating: 4.8,
      category: 'Animal',
      seller_name: 'Lolly Elward',
      seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      device: 'Google Daydream',
      polygon_amount: 55338,
      auto_upload: true
    },
    {
      id: 83,
      title: 'Expanded full-range product',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 631,
      description:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      rating: 4.6,
      category: 'Home Decor',
      seller_name: 'Slade Kubicek',
      seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      device: 'Oculus Rift',
      polygon_amount: 94959,
      auto_upload: false
    },
    {
      id: 84,
      title: 'Re-contextualized directional synergy',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 823,
      description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      rating: 4.4,
      category: 'Sports',
      seller_name: 'Evvie Struis',
      seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      device: 'Microsoft HoloLens',
      polygon_amount: 41592,
      auto_upload: true
    },
    {
      id: 85,
      title: 'Secured logistical challenge',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 442,
      description:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      rating: 4.8,
      category: 'Technology',
      seller_name: 'Crosby Bock',
      seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 17763,
      auto_upload: true
    },
    {
      id: 86,
      title: 'Open-architected 24/7 interface',
      image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      price: 734,
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      rating: 3.5,
      category: 'Food',
      seller_name: 'Flin Ruecastle',
      seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
      device: 'HTC Vive',
      polygon_amount: 22039,
      auto_upload: true
    },
    {
      id: 87,
      title: 'Re-engineered background pricing structure',
      image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
      price: 366,
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      rating: 3.1,
      category: 'Animal',
      seller_name: 'Sherlocke Truse',
      seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
      device: 'PlayStation VR',
      polygon_amount: 82498,
      auto_upload: false
    },
    {
      id: 88,
      title: 'Progressive transitional projection',
      image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      price: 436,
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      rating: 4.4,
      category: 'Technology',
      seller_name: 'Alyssa Kamiyama',
      seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 33837,
      auto_upload: true
    },
    {
      id: 89,
      title: 'Reduced asynchronous pricing structure',
      image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      price: 940,
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      rating: 3.4,
      category: 'Animal',
      seller_name: 'Clifford Limer',
      seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      device: 'HTC Vive',
      polygon_amount: 68376,
      auto_upload: false
    },
    {
      id: 90,
      title: 'Implemented stable architecture',
      image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
      price: 699,
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      rating: 4.8,
      category: 'Books',
      seller_name: 'Micki Keeley',
      seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
      device: 'Google Daydream',
      polygon_amount: 67225,
      auto_upload: true
    },
    {
      id: 91,
      title: 'Diverse foreground collaboration',
      image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
      price: 867,
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      rating: 4.7,
      category: 'Books',
      seller_name: 'Kathie Longbone',
      seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      device: 'PlayStation VR',
      polygon_amount: 90711,
      auto_upload: false
    },
    {
      id: 92,
      title: 'Virtual background protocol',
      image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      price: 129,
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      rating: 3.9,
      category: 'Superhero',
      seller_name: 'Lawrence Fenners',
      seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
      device: 'PlayStation VR',
      polygon_amount: 34710,
      auto_upload: true
    },
    {
      id: 93,
      title: 'Monitored cohesive architecture',
      image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      price: 897,
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      rating: 3.3,
      category: 'Home Decor',
      seller_name: 'Engracia Dilkes',
      seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
      device: 'HTC Vive',
      polygon_amount: 78092,
      auto_upload: false
    },
    {
      id: 94,
      title: 'Polarised systematic instruction set',
      image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
      price: 679,
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      rating: 4.6,
      category: 'Home Decor',
      seller_name: 'Julia Gethin',
      seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
      device: 'HTC Vive',
      polygon_amount: 32809,
      auto_upload: false
    },
    {
      id: 95,
      title: 'Visionary explicit monitoring',
      image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
      price: 658,
      description:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      rating: 3.1,
      category: 'Sports',
      seller_name: 'Vilhelmina Drakers',
      seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
      device: 'PlayStation VR',
      polygon_amount: 53405,
      auto_upload: false
    },
    {
      id: 96,
      title: 'Assimilated client-server groupware',
      image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      price: 77,
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      rating: 4.2,
      category: 'Books',
      seller_name: 'Emlynn Greensides',
      seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
      device: 'Oculus Rift',
      polygon_amount: 41712,
      auto_upload: true
    },
    {
      id: 97,
      title: 'Total zero tolerance methodology',
      image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
      price: 310,
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      rating: 4.8,
      category: 'Toys',
      seller_name: 'Lilith Boggon',
      seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
      device: 'Samsung Gear VR',
      polygon_amount: 57036,
      auto_upload: true
    },
    {
      id: 98,
      title: 'Proactive high-level Graphic Interface',
      image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
      price: 629,
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      rating: 4.9,
      category: 'Home Decor',
      seller_name: 'Ephrem Blind',
      seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
      device: 'PlayStation VR',
      polygon_amount: 37258,
      auto_upload: false
    },
    {
      id: 99,
      title: 'Future-proofed bottom-line open system',
      image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      price: 661,
      description:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      rating: 4.8,
      category: 'Fashion',
      seller_name: 'Munroe Bibbie',
      seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
      device: 'PlayStation VR',
      polygon_amount: 11910,
      auto_upload: true
    },
    {
      id: 100,
      title: 'Compatible dedicated extranet',
      image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
      price: 788,
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      rating: 4.4,
      category: 'Superhero',
      seller_name: 'Elliott Jagoe',
      seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
      device: 'HTC Vive',
      polygon_amount: 64486,
      auto_upload: false
    },
    // {
    //   id: 101,
    //   title: 'De-engineered multi-state instruction set',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 952,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.4,
    //   category: 'Food',
    //   seller_name: "Phillipp O'Cahsedy",
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 45611,
    //   auto_upload: true
    // },
    // {
    //   id: 102,
    //   title: 'Managed motivating groupware',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 877,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.6,
    //   category: 'Sports',
    //   seller_name: 'Way Apfler',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 49908,
    //   auto_upload: true
    // },
    // {
    //   id: 103,
    //   title: 'Implemented motivating artificial intelligence',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 138,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 4.3,
    //   category: 'Books',
    //   seller_name: 'Rafa Mablestone',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 7346,
    //   auto_upload: false
    // },
    // {
    //   id: 104,
    //   title: 'User-centric client-driven implementation',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 634,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 3.1,
    //   category: 'Technology',
    //   seller_name: 'Arthur Ingreda',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 31520,
    //   auto_upload: true
    // },
    // {
    //   id: 105,
    //   title: 'Extended responsive conglomeration',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 840,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.8,
    //   category: 'Toys',
    //   seller_name: 'Urban Tinwell',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 73858,
    //   auto_upload: false
    // },
    // {
    //   id: 106,
    //   title: 'Exclusive 4th generation moratorium',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 684,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 5.0,
    //   category: 'Books',
    //   seller_name: 'Lalo Docksey',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 46666,
    //   auto_upload: true
    // },
    // {
    //   id: 107,
    //   title: 'Quality-focused responsive algorithm',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 778,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.4,
    //   category: 'Toys',
    //   seller_name: 'Fran Mottershaw',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 56432,
    //   auto_upload: false
    // },
    // {
    //   id: 108,
    //   title: 'Secured zero tolerance array',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 898,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.3,
    //   category: 'Superhero',
    //   seller_name: 'Corny Bassano',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 16581,
    //   auto_upload: true
    // },
    // {
    //   id: 109,
    //   title: 'Synergistic asynchronous website',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 311,
    //   description:
    //     'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 3.2,
    //   category: 'Beauty',
    //   seller_name: 'Rosalia Northedge',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 91493,
    //   auto_upload: false
    // },
    // {
    //   id: 110,
    //   title: 'Upgradable eco-centric website',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 72,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 5.0,
    //   category: 'Food',
    //   seller_name: 'Cletus McNamara',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 89720,
    //   auto_upload: true
    // },
    // {
    //   id: 111,
    //   title: 'Focused human-resource utilisation',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 951,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.7,
    //   category: 'Superhero',
    //   seller_name: 'Benji Rennick',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 54791,
    //   auto_upload: true
    // },
    // {
    //   id: 112,
    //   title: 'Optimized stable paradigm',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 559,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.2,
    //   category: 'Animal',
    //   seller_name: 'Lynne Ellph',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 62128,
    //   auto_upload: false
    // },
    // {
    //   id: 113,
    //   title: 'Intuitive heuristic standardization',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 67,
    //   description:
    //     'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: 'Marni Gall',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 56715,
    //   auto_upload: false
    // },
    // {
    //   id: 114,
    //   title: 'Universal demand-driven leverage',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 361,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.2,
    //   category: 'Food',
    //   seller_name: 'Kayla Harmstone',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 83266,
    //   auto_upload: true
    // },
    // {
    //   id: 115,
    //   title: 'Fundamental needs-based flexibility',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 286,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 4.2,
    //   category: 'Sports',
    //   seller_name: 'Miguelita Laurens',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 67181,
    //   auto_upload: true
    // },
    // {
    //   id: 116,
    //   title: 'Customer-focused non-volatile neural-net',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 998,
    //   description:
    //     'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.3,
    //   category: 'Superhero',
    //   seller_name: 'Orelie Spensley',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 41240,
    //   auto_upload: false
    // },
    // {
    //   id: 117,
    //   title: 'Integrated mission-critical productivity',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 615,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.2,
    //   category: 'Toys',
    //   seller_name: 'Jedidiah Olphert',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 37725,
    //   auto_upload: true
    // },
    // {
    //   id: 118,
    //   title: 'Diverse systematic firmware',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 335,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.5,
    //   category: 'Sports',
    //   seller_name: 'Grantley Harley',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 37547,
    //   auto_upload: false
    // },
    // {
    //   id: 119,
    //   title: 'Cross-platform holistic intranet',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 446,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 4.6,
    //   category: 'Superhero',
    //   seller_name: 'Conni Crawshaw',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 88974,
    //   auto_upload: true
    // },
    // {
    //   id: 120,
    //   title: 'User-friendly explicit attitude',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 374,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.5,
    //   category: 'Books',
    //   seller_name: 'Durante Hawkings',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 91800,
    //   auto_upload: false
    // },
    // {
    //   id: 121,
    //   title: 'Digitized foreground firmware',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 144,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 5.0,
    //   category: 'Beauty',
    //   seller_name: 'Athene Loukes',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 96080,
    //   auto_upload: false
    // },
    // {
    //   id: 122,
    //   title: 'Expanded multimedia solution',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 922,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 3.3,
    //   category: 'Fashion',
    //   seller_name: 'Gilda Lyddy',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 53957,
    //   auto_upload: false
    // },
    // {
    //   id: 123,
    //   title: 'Switchable 24 hour policy',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 225,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.4,
    //   category: 'Fashion',
    //   seller_name: 'Luigi Haversum',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 68079,
    //   auto_upload: false
    // },
    // {
    //   id: 124,
    //   title: 'Cloned even-keeled methodology',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 51,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.1,
    //   category: 'Books',
    //   seller_name: 'Blayne Zanazzi',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 51619,
    //   auto_upload: true
    // },
    // {
    //   id: 125,
    //   title: 'Upgradable demand-driven Graphic Interface',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 246,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.9,
    //   category: 'Technology',
    //   seller_name: 'Ardelia Reader',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 21098,
    //   auto_upload: true
    // },
    // {
    //   id: 126,
    //   title: 'Extended fresh-thinking approach',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 631,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.5,
    //   category: 'Beauty',
    //   seller_name: 'Dody Commings',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 9852,
    //   auto_upload: false
    // },
    // {
    //   id: 127,
    //   title: 'Horizontal fresh-thinking alliance',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 954,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.9,
    //   category: 'Superhero',
    //   seller_name: 'Barb Kender',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 55320,
    //   auto_upload: true
    // },
    // {
    //   id: 128,
    //   title: 'Business-focused empowering system engine',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 245,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 4.8,
    //   category: 'Toys',
    //   seller_name: 'Erena Campa',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 73663,
    //   auto_upload: false
    // },
    // {
    //   id: 129,
    //   title: 'Face to face next generation knowledge base',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 633,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.6,
    //   category: 'Home Decor',
    //   seller_name: 'Desdemona Beard',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 51372,
    //   auto_upload: false
    // },
    // {
    //   id: 130,
    //   title: 'Cloned bifurcated neural-net',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 355,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.3,
    //   category: 'Food',
    //   seller_name: 'Jennette Ludron',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 96490,
    //   auto_upload: true
    // },
    // {
    //   id: 131,
    //   title: 'Team-oriented static concept',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 333,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.9,
    //   category: 'Animal',
    //   seller_name: 'Babita Nesbeth',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 96688,
    //   auto_upload: true
    // },
    // {
    //   id: 132,
    //   title: 'Switchable didactic encryption',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 945,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 3.3,
    //   category: 'Toys',
    //   seller_name: 'Catlin Roostan',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 56686,
    //   auto_upload: true
    // },
    // {
    //   id: 133,
    //   title: 'Customer-focused directional initiative',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 741,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 3.9,
    //   category: 'Sports',
    //   seller_name: 'Had Gage',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 76004,
    //   auto_upload: true
    // },
    // {
    //   id: 134,
    //   title: 'Polarised systemic instruction set',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 313,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.3,
    //   category: 'Home Decor',
    //   seller_name: 'Virginie Chappelow',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 39085,
    //   auto_upload: false
    // },
    // {
    //   id: 135,
    //   title: 'Ameliorated neutral firmware',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 397,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.4,
    //   category: 'Technology',
    //   seller_name: 'Rafi Bompas',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 54295,
    //   auto_upload: false
    // },
    // {
    //   id: 136,
    //   title: 'Re-engineered cohesive circuit',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 95,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 3.2,
    //   category: 'Superhero',
    //   seller_name: 'Tanya Tomkies',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 71033,
    //   auto_upload: false
    // },
    // {
    //   id: 137,
    //   title: 'Virtual interactive approach',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 323,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.1,
    //   category: 'Toys',
    //   seller_name: 'Roddy Djurdjevic',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 43299,
    //   auto_upload: false
    // },
    // {
    //   id: 138,
    //   title: 'Right-sized fresh-thinking system engine',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 867,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.0,
    //   category: 'Beauty',
    //   seller_name: 'Hilly Humphery',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 11298,
    //   auto_upload: true
    // },
    // {
    //   id: 139,
    //   title: 'Universal mobile local area network',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 824,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 4.2,
    //   category: 'Technology',
    //   seller_name: 'Salaidh Walling',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 82816,
    //   auto_upload: false
    // },
    // {
    //   id: 140,
    //   title: 'User-centric web-enabled time-frame',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 870,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.5,
    //   category: 'Animal',
    //   seller_name: 'Kacy Bohey',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 75982,
    //   auto_upload: true
    // },
    // {
    //   id: 141,
    //   title: 'Stand-alone background adapter',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 96,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.8,
    //   category: 'Beauty',
    //   seller_name: 'Correy Loveridge',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 58705,
    //   auto_upload: false
    // },
    // {
    //   id: 142,
    //   title: 'Optimized optimizing challenge',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 871,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 3.6,
    //   category: 'Technology',
    //   seller_name: 'Gorden Ber',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 53664,
    //   auto_upload: true
    // },
    // {
    //   id: 143,
    //   title: 'Inverse methodical portal',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 152,
    //   description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 4.7,
    //   category: 'Home Decor',
    //   seller_name: 'Jorge McEntee',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 34303,
    //   auto_upload: true
    // },
    // {
    //   id: 144,
    //   title: 'Grass-roots web-enabled portal',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 97,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.3,
    //   category: 'Technology',
    //   seller_name: 'Stefania Brabban',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 88705,
    //   auto_upload: true
    // },
    // {
    //   id: 145,
    //   title: 'Networked exuding initiative',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 734,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.3,
    //   category: 'Toys',
    //   seller_name: 'Fayth Hardinge',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 43137,
    //   auto_upload: true
    // },
    // {
    //   id: 146,
    //   title: 'Proactive tertiary implementation',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 325,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 3.2,
    //   category: 'Sports',
    //   seller_name: 'Brendon Eytel',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 62975,
    //   auto_upload: true
    // },
    // {
    //   id: 147,
    //   title: 'Cloned leading edge moratorium',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 926,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.0,
    //   category: 'Beauty',
    //   seller_name: 'Silvester Adamovsky',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 19658,
    //   auto_upload: true
    // },
    // {
    //   id: 148,
    //   title: 'Persistent multi-tasking concept',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 578,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.7,
    //   category: 'Toys',
    //   seller_name: 'Paolina Sudy',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 51880,
    //   auto_upload: false
    // },
    // {
    //   id: 149,
    //   title: 'Versatile intermediate neural-net',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 913,
    //   description:
    //     'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 4.5,
    //   category: 'Toys',
    //   seller_name: 'Joice Bowton',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 62181,
    //   auto_upload: false
    // },
    // {
    //   id: 150,
    //   title: 'Synergistic well-modulated emulation',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 532,
    //   description:
    //     'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 3.7,
    //   category: 'Books',
    //   seller_name: 'Gunter Prendiville',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 64048,
    //   auto_upload: false
    // },
    // {
    //   id: 151,
    //   title: 'Persistent multimedia model',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 774,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.7,
    //   category: 'Animal',
    //   seller_name: 'Farleigh Wilfing',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 87706,
    //   auto_upload: true
    // },
    // {
    //   id: 152,
    //   title: 'Cross-group logistical approach',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 642,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.8,
    //   category: 'Fashion',
    //   seller_name: 'Vaughn Rainforth',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 27709,
    //   auto_upload: false
    // },
    // {
    //   id: 153,
    //   title: 'Exclusive encompassing superstructure',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 785,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 3.3,
    //   category: 'Books',
    //   seller_name: 'Shirley Hauger',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 33609,
    //   auto_upload: false
    // },
    // {
    //   id: 154,
    //   title: 'Integrated secondary function',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 775,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.7,
    //   category: 'Animal',
    //   seller_name: 'Davidson Dumbar',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 95360,
    //   auto_upload: true
    // },
    // {
    //   id: 155,
    //   title: 'Cross-group transitional info-mediaries',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 480,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 3.7,
    //   category: 'Toys',
    //   seller_name: 'Opal Kwietak',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 12886,
    //   auto_upload: true
    // },
    // {
    //   id: 156,
    //   title: 'Polarised hybrid migration',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 199,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 3.0,
    //   category: 'Beauty',
    //   seller_name: 'Shep Huxstep',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 53807,
    //   auto_upload: false
    // },
    // {
    //   id: 157,
    //   title: 'Diverse context-sensitive hub',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 665,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 4.0,
    //   category: 'Beauty',
    //   seller_name: 'Polly Bamlet',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 24122,
    //   auto_upload: true
    // },
    // {
    //   id: 158,
    //   title: 'Optimized systematic functionalities',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 92,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.4,
    //   category: 'Food',
    //   seller_name: 'Norine de Marco',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 67986,
    //   auto_upload: false
    // },
    // {
    //   id: 159,
    //   title: 'Polarised encompassing info-mediaries',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 68,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 4.0,
    //   category: 'Fashion',
    //   seller_name: 'Averyl Fairy',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 57720,
    //   auto_upload: true
    // },
    // {
    //   id: 160,
    //   title: 'Stand-alone scalable encryption',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 827,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 4.3,
    //   category: 'Home Decor',
    //   seller_name: 'Corrie McSkeagan',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 29371,
    //   auto_upload: false
    // },
    // {
    //   id: 161,
    //   title: 'Object-based dynamic infrastructure',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 176,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 4.5,
    //   category: 'Technology',
    //   seller_name: 'Sanson Lavrick',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 92840,
    //   auto_upload: true
    // },
    // {
    //   id: 162,
    //   title: 'Down-sized bifurcated benchmark',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 444,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 3.8,
    //   category: 'Food',
    //   seller_name: 'Drusie Fishleigh',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 46858,
    //   auto_upload: true
    // },
    // {
    //   id: 163,
    //   title: 'Team-oriented eco-centric attitude',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 995,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.2,
    //   category: 'Home Decor',
    //   seller_name: 'Gratiana Aylin',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 65109,
    //   auto_upload: false
    // },
    // {
    //   id: 164,
    //   title: 'Reverse-engineered high-level standardization',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 911,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.9,
    //   category: 'Home Decor',
    //   seller_name: 'Ariana Judd',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 39596,
    //   auto_upload: true
    // },
    // {
    //   id: 165,
    //   title: 'Expanded disintermediate instruction set',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 633,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.2,
    //   category: 'Animal',
    //   seller_name: 'Cordy Large',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 43888,
    //   auto_upload: false
    // },
    // {
    //   id: 166,
    //   title: 'Business-focused real-time parallelism',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 282,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.1,
    //   category: 'Superhero',
    //   seller_name: 'Hanson Renols',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 53636,
    //   auto_upload: false
    // },
    // {
    //   id: 167,
    //   title: 'Virtual transitional workforce',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 939,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 4.1,
    //   category: 'Food',
    //   seller_name: 'Cecil Breinlein',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 77461,
    //   auto_upload: true
    // },
    // {
    //   id: 168,
    //   title: 'Multi-layered multi-tasking protocol',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 395,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.9,
    //   category: 'Food',
    //   seller_name: 'Allayne Sisse',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 48971,
    //   auto_upload: true
    // },
    // {
    //   id: 169,
    //   title: 'Enhanced 24 hour budgetary management',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 431,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.8,
    //   category: 'Superhero',
    //   seller_name: 'Shandee Bachura',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 31848,
    //   auto_upload: true
    // },
    // {
    //   id: 170,
    //   title: 'Operative zero tolerance portal',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 637,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.8,
    //   category: 'Toys',
    //   seller_name: 'Hally Isaaksohn',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 71585,
    //   auto_upload: false
    // },
    // {
    //   id: 171,
    //   title: 'Versatile homogeneous framework',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 929,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.9,
    //   category: 'Animal',
    //   seller_name: 'Conchita Sholem',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 79208,
    //   auto_upload: false
    // },
    // {
    //   id: 172,
    //   title: 'Business-focused human-resource encryption',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 772,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.6,
    //   category: 'Technology',
    //   seller_name: 'Daphne Routh',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 30727,
    //   auto_upload: true
    // },
    // {
    //   id: 173,
    //   title: 'Vision-oriented scalable paradigm',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 699,
    //   description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.8,
    //   category: 'Animal',
    //   seller_name: 'Roxy Brixey',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 43686,
    //   auto_upload: false
    // },
    // {
    //   id: 174,
    //   title: 'Organic grid-enabled matrix',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 77,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.9,
    //   category: 'Fashion',
    //   seller_name: 'Francisco Bowering',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 48736,
    //   auto_upload: false
    // },
    // {
    //   id: 175,
    //   title: 'Upgradable content-based encoding',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 476,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.4,
    //   category: 'Animal',
    //   seller_name: 'Georgi Shorten',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 39325,
    //   auto_upload: false
    // },
    // {
    //   id: 176,
    //   title: 'Total mobile installation',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 768,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.3,
    //   category: 'Superhero',
    //   seller_name: 'Bertie Hacquel',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 77133,
    //   auto_upload: false
    // },
    // {
    //   id: 177,
    //   title: 'Object-based maximized adapter',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 254,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.3,
    //   category: 'Technology',
    //   seller_name: 'Bird Frichley',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 73033,
    //   auto_upload: false
    // },
    // {
    //   id: 178,
    //   title: 'Fully-configurable grid-enabled encoding',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 710,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.3,
    //   category: 'Beauty',
    //   seller_name: 'Babette Cyster',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 12475,
    //   auto_upload: false
    // },
    // {
    //   id: 179,
    //   title: 'Enhanced systematic attitude',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 725,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 3.7,
    //   category: 'Superhero',
    //   seller_name: 'Wrennie Seville',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 56137,
    //   auto_upload: true
    // },
    // {
    //   id: 180,
    //   title: 'De-engineered responsive methodology',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 352,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 3.8,
    //   category: 'Home Decor',
    //   seller_name: 'Rita Lund',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 5672,
    //   auto_upload: true
    // },
    // {
    //   id: 181,
    //   title: 'Diverse object-oriented groupware',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 265,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.3,
    //   category: 'Fashion',
    //   seller_name: 'Mariska Tripet',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 68984,
    //   auto_upload: false
    // },
    // {
    //   id: 182,
    //   title: 'Triple-buffered modular functionalities',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 824,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.2,
    //   category: 'Home Decor',
    //   seller_name: 'Dasie Westerman',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 94809,
    //   auto_upload: true
    // },
    // {
    //   id: 183,
    //   title: 'Enterprise-wide background implementation',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 900,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 4.4,
    //   category: 'Toys',
    //   seller_name: 'Herta Eve',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 8134,
    //   auto_upload: true
    // },
    // {
    //   id: 184,
    //   title: 'Profit-focused fresh-thinking capacity',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 506,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.4,
    //   category: 'Superhero',
    //   seller_name: 'Ker Pimm',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 64003,
    //   auto_upload: true
    // },
    // {
    //   id: 185,
    //   title: 'Networked intangible conglomeration',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 272,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.7,
    //   category: 'Fashion',
    //   seller_name: 'Madelon Allflatt',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 34698,
    //   auto_upload: true
    // },
    // {
    //   id: 186,
    //   title: 'Face to face object-oriented process improvement',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 596,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 4.6,
    //   category: 'Fashion',
    //   seller_name: 'Libbie Kunneke',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 47039,
    //   auto_upload: true
    // },
    // {
    //   id: 187,
    //   title: 'Digitized directional model',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 405,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.5,
    //   category: 'Technology',
    //   seller_name: 'Tiff Spindler',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 77816,
    //   auto_upload: false
    // },
    // {
    //   id: 188,
    //   title: 'Face to face composite synergy',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 934,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.6,
    //   category: 'Sports',
    //   seller_name: 'Rhys Kirman',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 69498,
    //   auto_upload: true
    // },
    // {
    //   id: 189,
    //   title: 'Vision-oriented scalable concept',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 748,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 3.8,
    //   category: 'Sports',
    //   seller_name: 'Artie Bouldon',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 42631,
    //   auto_upload: true
    // },
    // {
    //   id: 190,
    //   title: 'Object-based clear-thinking help-desk',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 53,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.9,
    //   category: 'Animal',
    //   seller_name: 'Erinn Gedney',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 73021,
    //   auto_upload: true
    // },
    // {
    //   id: 191,
    //   title: 'User-centric systemic knowledge base',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 66,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.2,
    //   category: 'Animal',
    //   seller_name: 'Donica Praundlin',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 55625,
    //   auto_upload: false
    // },
    // {
    //   id: 192,
    //   title: 'Open-architected disintermediate function',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 689,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.0,
    //   category: 'Home Decor',
    //   seller_name: 'Kirbie Demschke',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 48522,
    //   auto_upload: true
    // },
    // {
    //   id: 193,
    //   title: 'Advanced bifurcated structure',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 511,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.0,
    //   category: 'Animal',
    //   seller_name: 'Saba Keepe',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 91351,
    //   auto_upload: false
    // },
    // {
    //   id: 194,
    //   title: 'Persistent logistical leverage',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 575,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.7,
    //   category: 'Food',
    //   seller_name: 'Sholom Human',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 94416,
    //   auto_upload: false
    // },
    // {
    //   id: 195,
    //   title: 'Customer-focused transitional standardization',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 896,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.7,
    //   category: 'Technology',
    //   seller_name: 'Tessy Cudiff',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 6003,
    //   auto_upload: false
    // },
    // {
    //   id: 196,
    //   title: 'Robust homogeneous neural-net',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 341,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.4,
    //   category: 'Toys',
    //   seller_name: 'Victoria Gianasi',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 81097,
    //   auto_upload: true
    // },
    // {
    //   id: 197,
    //   title: 'Advanced mission-critical open architecture',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 666,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 3.3,
    //   category: 'Technology',
    //   seller_name: 'Paul Peer',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 47601,
    //   auto_upload: false
    // },
    // {
    //   id: 198,
    //   title: 'Optional transitional capability',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 560,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 4.2,
    //   category: 'Technology',
    //   seller_name: 'Isidoro Keneford',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 30530,
    //   auto_upload: false
    // },
    // {
    //   id: 199,
    //   title: 'Balanced actuating paradigm',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 242,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 4.4,
    //   category: 'Fashion',
    //   seller_name: 'Annalee Cartledge',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 23776,
    //   auto_upload: false
    // },
    // {
    //   id: 200,
    //   title: 'Diverse full-range internet solution',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 442,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.7,
    //   category: 'Books',
    //   seller_name: 'Carola Message',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 99815,
    //   auto_upload: false
    // },
    // {
    //   id: 201,
    //   title: 'Programmable coherent matrix',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 86,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.6,
    //   category: 'Food',
    //   seller_name: 'Maiga Bruyet',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 95445,
    //   auto_upload: true
    // },
    // {
    //   id: 202,
    //   title: 'Devolved zero administration methodology',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 137,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 4.0,
    //   category: 'Superhero',
    //   seller_name: 'Derrik Peake',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 92608,
    //   auto_upload: true
    // },
    // {
    //   id: 203,
    //   title: 'Distributed tertiary intranet',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 460,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.4,
    //   category: 'Animal',
    //   seller_name: 'Ives Lagen',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 94779,
    //   auto_upload: false
    // },
    // {
    //   id: 204,
    //   title: 'Organized dedicated moratorium',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 266,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 3.4,
    //   category: 'Superhero',
    //   seller_name: 'Stern Govenlock',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 13160,
    //   auto_upload: false
    // },
    // {
    //   id: 205,
    //   title: 'Ergonomic dedicated system engine',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 671,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.8,
    //   category: 'Technology',
    //   seller_name: 'Guinevere Snedden',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 36257,
    //   auto_upload: true
    // },
    // {
    //   id: 206,
    //   title: 'Distributed explicit throughput',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 788,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.0,
    //   category: 'Fashion',
    //   seller_name: 'Moise Stroud',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 17833,
    //   auto_upload: false
    // },
    // {
    //   id: 207,
    //   title: 'Re-engineered multimedia superstructure',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 826,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Letty Splaven',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 78581,
    //   auto_upload: true
    // },
    // {
    //   id: 208,
    //   title: 'Open-source methodical capacity',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 590,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 4.0,
    //   category: 'Technology',
    //   seller_name: 'Leonard Lapthorne',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 94442,
    //   auto_upload: true
    // },
    // {
    //   id: 209,
    //   title: 'Adaptive 24/7 data-warehouse',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 417,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.0,
    //   category: 'Sports',
    //   seller_name: 'Artemus Scapens',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 37979,
    //   auto_upload: false
    // },
    // {
    //   id: 210,
    //   title: 'Stand-alone background contingency',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 726,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 4.0,
    //   category: 'Technology',
    //   seller_name: 'Tove De Malchar',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 68041,
    //   auto_upload: false
    // },
    // {
    //   id: 211,
    //   title: 'Cross-platform multi-tasking capability',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 467,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 3.9,
    //   category: 'Toys',
    //   seller_name: 'Roderich Pietruszewicz',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 87514,
    //   auto_upload: true
    // },
    // {
    //   id: 212,
    //   title: 'Universal multimedia parallelism',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 788,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.5,
    //   category: 'Animal',
    //   seller_name: 'Martin Comiskey',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 90371,
    //   auto_upload: false
    // },
    // {
    //   id: 213,
    //   title: 'Adaptive demand-driven knowledge base',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 799,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.6,
    //   category: 'Books',
    //   seller_name: 'Rey Trahearn',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 99418,
    //   auto_upload: false
    // },
    // {
    //   id: 214,
    //   title: 'Business-focused asymmetric functionalities',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 751,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 3.3,
    //   category: 'Books',
    //   seller_name: 'Anselm Semens',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 75233,
    //   auto_upload: true
    // },
    // {
    //   id: 215,
    //   title: 'Mandatory high-level protocol',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 249,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.3,
    //   category: 'Fashion',
    //   seller_name: 'Rurik Wotherspoon',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 82398,
    //   auto_upload: true
    // },
    // {
    //   id: 216,
    //   title: 'Pre-emptive holistic support',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 101,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 4.6,
    //   category: 'Technology',
    //   seller_name: 'Teddy Scothorne',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 37367,
    //   auto_upload: true
    // },
    // {
    //   id: 217,
    //   title: 'Diverse non-volatile policy',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 312,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 3.5,
    //   category: 'Animal',
    //   seller_name: 'Henrieta Loney',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 30333,
    //   auto_upload: false
    // },
    // {
    //   id: 218,
    //   title: 'Operative user-facing knowledge base',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 541,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 3.3,
    //   category: 'Books',
    //   seller_name: 'Waylen Pardie',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 94756,
    //   auto_upload: true
    // },
    // {
    //   id: 219,
    //   title: 'Progressive attitude-oriented project',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 983,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.8,
    //   category: 'Home Decor',
    //   seller_name: 'Gabrila Giacobillo',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 52685,
    //   auto_upload: false
    // },
    // {
    //   id: 220,
    //   title: 'Intuitive discrete toolset',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 770,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.7,
    //   category: 'Food',
    //   seller_name: 'Ursulina Sultan',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 20150,
    //   auto_upload: true
    // },
    // {
    //   id: 221,
    //   title: 'Profound high-level website',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 174,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 4.2,
    //   category: 'Toys',
    //   seller_name: 'Gilbertine Cadwallader',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 43175,
    //   auto_upload: false
    // },
    // {
    //   id: 222,
    //   title: 'Networked maximized project',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 966,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 3.9,
    //   category: 'Fashion',
    //   seller_name: 'Guy Staite',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 47753,
    //   auto_upload: false
    // },
    // {
    //   id: 223,
    //   title: 'Cloned multi-state hub',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 324,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 3.0,
    //   category: 'Technology',
    //   seller_name: 'Liv Stallion',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 28843,
    //   auto_upload: true
    // },
    // {
    //   id: 224,
    //   title: 'Multi-layered bottom-line service-desk',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 121,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 4.7,
    //   category: 'Superhero',
    //   seller_name: 'Mannie Peregrine',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 68033,
    //   auto_upload: false
    // },
    // {
    //   id: 225,
    //   title: 'Ergonomic directional success',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 961,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 4.4,
    //   category: 'Books',
    //   seller_name: 'Kitty Serris',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 78242,
    //   auto_upload: true
    // },
    // {
    //   id: 226,
    //   title: 'Up-sized regional interface',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 833,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.5,
    //   category: 'Sports',
    //   seller_name: 'Felipe Harfleet',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 29857,
    //   auto_upload: false
    // },
    // {
    //   id: 227,
    //   title: 'Optimized bifurcated attitude',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 410,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.9,
    //   category: 'Food',
    //   seller_name: 'Adi Lohde',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 43731,
    //   auto_upload: false
    // },
    // {
    //   id: 228,
    //   title: 'Extended executive hardware',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 892,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.1,
    //   category: 'Sports',
    //   seller_name: 'Crissie Gwyllt',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 29520,
    //   auto_upload: true
    // },
    // {
    //   id: 229,
    //   title: 'Realigned bandwidth-monitored middleware',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 962,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.3,
    //   category: 'Fashion',
    //   seller_name: 'Shannon Kitteringham',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 74656,
    //   auto_upload: true
    // },
    // {
    //   id: 230,
    //   title: 'Configurable encompassing budgetary management',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 752,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.7,
    //   category: 'Home Decor',
    //   seller_name: 'Tanhya Lorryman',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 38559,
    //   auto_upload: true
    // },
    // {
    //   id: 231,
    //   title: 'Function-based next generation functionalities',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 709,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.6,
    //   category: 'Beauty',
    //   seller_name: 'Floris Noe',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 81082,
    //   auto_upload: false
    // },
    // {
    //   id: 232,
    //   title: 'Adaptive national middleware',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 661,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.4,
    //   category: 'Toys',
    //   seller_name: 'Ruddie Titley',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 84761,
    //   auto_upload: true
    // },
    // {
    //   id: 233,
    //   title: 'Object-based tangible collaboration',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 363,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.4,
    //   category: 'Sports',
    //   seller_name: 'Leslie Stendall',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 83180,
    //   auto_upload: true
    // },
    // {
    //   id: 234,
    //   title: 'Monitored leading edge support',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 76,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.2,
    //   category: 'Home Decor',
    //   seller_name: 'Heddie Losel',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 95775,
    //   auto_upload: true
    // },
    // {
    //   id: 235,
    //   title: 'Integrated analyzing implementation',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 110,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 3.8,
    //   category: 'Superhero',
    //   seller_name: 'Andrus Hasty',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 35363,
    //   auto_upload: false
    // },
    // {
    //   id: 236,
    //   title: 'Self-enabling local frame',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 679,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.2,
    //   category: 'Animal',
    //   seller_name: 'Ivan Ibanez',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 40505,
    //   auto_upload: true
    // },
    // {
    //   id: 237,
    //   title: 'Assimilated 6th generation methodology',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 593,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.6,
    //   category: 'Animal',
    //   seller_name: 'Farlay Javes',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 59274,
    //   auto_upload: false
    // },
    // {
    //   id: 238,
    //   title: 'Universal uniform process improvement',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 793,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 3.4,
    //   category: 'Animal',
    //   seller_name: 'Barbabra Basant',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 72804,
    //   auto_upload: false
    // },
    // {
    //   id: 239,
    //   title: 'Customizable exuding extranet',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 832,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.0,
    //   category: 'Sports',
    //   seller_name: 'Skippy Setterington',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 85936,
    //   auto_upload: false
    // },
    // {
    //   id: 240,
    //   title: 'Synergized exuding local area network',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 803,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.0,
    //   category: 'Animal',
    //   seller_name: 'Trenna Stieger',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 5666,
    //   auto_upload: true
    // },
    // {
    //   id: 241,
    //   title: 'Profound local algorithm',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 468,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.3,
    //   category: 'Fashion',
    //   seller_name: 'Sigfrid Guerreru',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 26219,
    //   auto_upload: false
    // },
    // {
    //   id: 242,
    //   title: 'Advanced actuating approach',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 173,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.1,
    //   category: 'Superhero',
    //   seller_name: 'Jaclyn Bann',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 28789,
    //   auto_upload: false
    // },
    // {
    //   id: 243,
    //   title: 'Operative empowering product',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 942,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.9,
    //   category: 'Home Decor',
    //   seller_name: 'Shaina Petticrow',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 36095,
    //   auto_upload: false
    // },
    // {
    //   id: 244,
    //   title: 'Intuitive transitional support',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 633,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.7,
    //   category: 'Superhero',
    //   seller_name: 'Torrence Cline',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 31733,
    //   auto_upload: false
    // },
    // {
    //   id: 245,
    //   title: 'Reverse-engineered reciprocal throughput',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 864,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 3.6,
    //   category: 'Fashion',
    //   seller_name: 'Grant Yellop',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 70834,
    //   auto_upload: false
    // },
    // {
    //   id: 246,
    //   title: 'Multi-lateral real-time database',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 189,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.0,
    //   category: 'Sports',
    //   seller_name: 'Dud Center',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 19477,
    //   auto_upload: false
    // },
    // {
    //   id: 247,
    //   title: 'Configurable discrete model',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 171,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.5,
    //   category: 'Food',
    //   seller_name: 'Alden Melin',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 6893,
    //   auto_upload: false
    // },
    // {
    //   id: 248,
    //   title: 'Optional national array',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 64,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.4,
    //   category: 'Animal',
    //   seller_name: 'Mattias Karran',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 27192,
    //   auto_upload: false
    // },
    // {
    //   id: 249,
    //   title: 'Polarised systemic migration',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 162,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.0,
    //   category: 'Food',
    //   seller_name: 'Tally Dudmesh',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 76917,
    //   auto_upload: true
    // },
    // {
    //   id: 250,
    //   title: 'Robust motivating utilisation',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 118,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 3.2,
    //   category: 'Food',
    //   seller_name: 'Ofilia Srawley',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 40095,
    //   auto_upload: true
    // },
    // {
    //   id: 251,
    //   title: 'Reactive asymmetric portal',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 542,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 3.8,
    //   category: 'Books',
    //   seller_name: 'Antons Strapp',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 81576,
    //   auto_upload: false
    // },
    // {
    //   id: 252,
    //   title: 'Business-focused tertiary Graphical User Interface',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 208,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 5.0,
    //   category: 'Sports',
    //   seller_name: 'Gavrielle Robelet',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 55983,
    //   auto_upload: false
    // },
    // {
    //   id: 253,
    //   title: 'User-friendly grid-enabled access',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 808,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.6,
    //   category: 'Sports',
    //   seller_name: 'Orrin Reekie',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 87123,
    //   auto_upload: false
    // },
    // {
    //   id: 254,
    //   title: 'Face to face context-sensitive core',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 656,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.6,
    //   category: 'Superhero',
    //   seller_name: 'Cale Dunsire',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 21956,
    //   auto_upload: false
    // },
    // {
    //   id: 255,
    //   title: 'Open-source holistic policy',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 931,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.3,
    //   category: 'Beauty',
    //   seller_name: 'Rubetta Morson',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 99171,
    //   auto_upload: true
    // },
    // {
    //   id: 256,
    //   title: 'Cross-platform incremental ability',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 65,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.4,
    //   category: 'Toys',
    //   seller_name: 'Cece Fendley',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 36622,
    //   auto_upload: false
    // },
    // {
    //   id: 257,
    //   title: 'Business-focused client-server ability',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 800,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 4.3,
    //   category: 'Sports',
    //   seller_name: 'Tammara MacSkeaghan',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 63272,
    //   auto_upload: true
    // },
    // {
    //   id: 258,
    //   title: 'Stand-alone non-volatile ability',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 955,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.5,
    //   category: 'Animal',
    //   seller_name: 'Dimitry Margerrison',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 42004,
    //   auto_upload: true
    // },
    // {
    //   id: 259,
    //   title: 'Horizontal background instruction set',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 466,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.4,
    //   category: 'Superhero',
    //   seller_name: 'Jeromy Coil',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 28063,
    //   auto_upload: true
    // },
    // {
    //   id: 260,
    //   title: 'Horizontal bifurcated database',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 219,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 3.4,
    //   category: 'Superhero',
    //   seller_name: 'Adan Milne',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 38729,
    //   auto_upload: true
    // },
    // {
    //   id: 261,
    //   title: 'Inverse intangible archive',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 653,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.3,
    //   category: 'Technology',
    //   seller_name: 'Willey Ferry',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 53726,
    //   auto_upload: true
    // },
    // {
    //   id: 262,
    //   title: 'Synergized regional moderator',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 677,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.7,
    //   category: 'Home Decor',
    //   seller_name: 'Reg Furman',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 64799,
    //   auto_upload: false
    // },
    // {
    //   id: 263,
    //   title: 'Stand-alone mobile definition',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 64,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.5,
    //   category: 'Books',
    //   seller_name: 'Joshuah Hanhart',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 59567,
    //   auto_upload: false
    // },
    // {
    //   id: 264,
    //   title: 'Multi-layered object-oriented superstructure',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 315,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.3,
    //   category: 'Superhero',
    //   seller_name: 'Quintin Grievson',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 23820,
    //   auto_upload: false
    // },
    // {
    //   id: 265,
    //   title: 'Monitored impactful info-mediaries',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 902,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 3.7,
    //   category: 'Superhero',
    //   seller_name: 'Arri Bearsmore',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 96508,
    //   auto_upload: true
    // },
    // {
    //   id: 266,
    //   title: 'Business-focused content-based function',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 890,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 4.6,
    //   category: 'Fashion',
    //   seller_name: 'Damian Petrishchev',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 11717,
    //   auto_upload: false
    // },
    // {
    //   id: 267,
    //   title: 'Triple-buffered tangible migration',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 936,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.1,
    //   category: 'Sports',
    //   seller_name: 'Romeo Chastanet',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 31913,
    //   auto_upload: true
    // },
    // {
    //   id: 268,
    //   title: 'Ameliorated multimedia standardization',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 421,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 3.6,
    //   category: 'Animal',
    //   seller_name: 'Corby Lawson',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 8515,
    //   auto_upload: true
    // },
    // {
    //   id: 269,
    //   title: 'Compatible contextually-based intranet',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 925,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.9,
    //   category: 'Food',
    //   seller_name: 'Cad Connichie',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 27050,
    //   auto_upload: false
    // },
    // {
    //   id: 270,
    //   title: 'Exclusive incremental function',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 577,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: "Rodolph O' Meara",
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 13621,
    //   auto_upload: true
    // },
    // {
    //   id: 271,
    //   title: 'Stand-alone multi-state artificial intelligence',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 317,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.2,
    //   category: 'Toys',
    //   seller_name: 'Torr Gibbieson',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 27950,
    //   auto_upload: true
    // },
    // {
    //   id: 272,
    //   title: 'Front-line analyzing pricing structure',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 284,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.9,
    //   category: 'Technology',
    //   seller_name: 'Marcille Skeates',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 66660,
    //   auto_upload: true
    // },
    // {
    //   id: 273,
    //   title: 'Advanced content-based initiative',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 991,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.4,
    //   category: 'Fashion',
    //   seller_name: 'Guillermo Mazzei',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 31184,
    //   auto_upload: true
    // },
    // {
    //   id: 274,
    //   title: 'Customizable scalable superstructure',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 733,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.9,
    //   category: 'Food',
    //   seller_name: 'Charlie Goldis',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 18331,
    //   auto_upload: true
    // },
    // {
    //   id: 275,
    //   title: 'Ameliorated high-level artificial intelligence',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 586,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 4.0,
    //   category: 'Home Decor',
    //   seller_name: 'Sheffy Humfrey',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 12840,
    //   auto_upload: true
    // },
    // {
    //   id: 276,
    //   title: 'Optimized mission-critical encryption',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 504,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 3.0,
    //   category: 'Technology',
    //   seller_name: 'Rosette Harbach',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 43754,
    //   auto_upload: true
    // },
    // {
    //   id: 277,
    //   title: 'Realigned responsive instruction set',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 639,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.5,
    //   category: 'Fashion',
    //   seller_name: 'Rosella Ashley',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 24963,
    //   auto_upload: true
    // },
    // {
    //   id: 278,
    //   title: 'Business-focused contextually-based implementation',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 750,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 4.4,
    //   category: 'Home Decor',
    //   seller_name: 'Gaby Carlone',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 41120,
    //   auto_upload: true
    // },
    // {
    //   id: 279,
    //   title: 'Secured impactful toolset',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 719,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.1,
    //   category: 'Fashion',
    //   seller_name: 'Rose Smittoune',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 88944,
    //   auto_upload: false
    // },
    // {
    //   id: 280,
    //   title: 'Total full-range info-mediaries',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 546,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.8,
    //   category: 'Superhero',
    //   seller_name: 'Briana Lucus',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 75827,
    //   auto_upload: true
    // },
    // {
    //   id: 281,
    //   title: 'Reactive intermediate customer loyalty',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 595,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.2,
    //   category: 'Books',
    //   seller_name: 'Buck Douthwaite',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 46562,
    //   auto_upload: false
    // },
    // {
    //   id: 282,
    //   title: 'Automated incremental frame',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 971,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.9,
    //   category: 'Toys',
    //   seller_name: 'Ralina Margrett',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 67970,
    //   auto_upload: false
    // },
    // {
    //   id: 283,
    //   title: 'Polarised context-sensitive installation',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 850,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.7,
    //   category: 'Sports',
    //   seller_name: 'Bobbe Lyster',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 22203,
    //   auto_upload: true
    // },
    // {
    //   id: 284,
    //   title: 'Extended optimal projection',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 454,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.2,
    //   category: 'Food',
    //   seller_name: 'Alane Matveichev',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 43030,
    //   auto_upload: true
    // },
    // {
    //   id: 285,
    //   title: 'Intuitive contextually-based budgetary management',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 257,
    //   description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 4.0,
    //   category: 'Food',
    //   seller_name: 'Malissia Surcombe',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 7000,
    //   auto_upload: false
    // },
    // {
    //   id: 286,
    //   title: 'Managed multi-tasking contingency',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 216,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.9,
    //   category: 'Superhero',
    //   seller_name: 'Stevana Hamon',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 6283,
    //   auto_upload: true
    // },
    // {
    //   id: 287,
    //   title: 'Right-sized next generation hardware',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 314,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.4,
    //   category: 'Books',
    //   seller_name: 'Ilsa Bernolet',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 22006,
    //   auto_upload: false
    // },
    // {
    //   id: 288,
    //   title: 'Up-sized modular Graphic Interface',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 307,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 4.5,
    //   category: 'Beauty',
    //   seller_name: "Retha O'Reilly",
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 53039,
    //   auto_upload: false
    // },
    // {
    //   id: 289,
    //   title: 'Stand-alone reciprocal functionalities',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 275,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.6,
    //   category: 'Technology',
    //   seller_name: 'Krystyna Coultish',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 97918,
    //   auto_upload: true
    // },
    // {
    //   id: 290,
    //   title: 'Diverse holistic intranet',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 426,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 3.5,
    //   category: 'Books',
    //   seller_name: 'Tobin Hurton',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 75025,
    //   auto_upload: false
    // },
    // {
    //   id: 291,
    //   title: 'Assimilated system-worthy middleware',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 489,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 4.6,
    //   category: 'Sports',
    //   seller_name: 'Dorothee Clack',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 58680,
    //   auto_upload: false
    // },
    // {
    //   id: 292,
    //   title: 'Re-contextualized coherent info-mediaries',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 442,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.9,
    //   category: 'Food',
    //   seller_name: 'Shandie Teare',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 98701,
    //   auto_upload: false
    // },
    // {
    //   id: 293,
    //   title: 'Exclusive fault-tolerant archive',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 394,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.4,
    //   category: 'Animal',
    //   seller_name: 'Zacherie Knipe',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 20653,
    //   auto_upload: false
    // },
    // {
    //   id: 294,
    //   title: 'Centralized bi-directional system engine',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 971,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 4.3,
    //   category: 'Books',
    //   seller_name: 'Kay Seathwright',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 10666,
    //   auto_upload: true
    // },
    // {
    //   id: 295,
    //   title: 'Implemented high-level access',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 442,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.6,
    //   category: 'Books',
    //   seller_name: 'Modestia Braley',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 85794,
    //   auto_upload: false
    // },
    // {
    //   id: 296,
    //   title: 'Devolved solution-oriented budgetary management',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 151,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.3,
    //   category: 'Technology',
    //   seller_name: 'Sheelah Blais',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 82918,
    //   auto_upload: true
    // },
    // {
    //   id: 297,
    //   title: 'Open-architected solution-oriented function',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 316,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.3,
    //   category: 'Fashion',
    //   seller_name: 'Ester Rains',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 80771,
    //   auto_upload: false
    // },
    // {
    //   id: 298,
    //   title: 'Multi-lateral zero administration artificial intelligence',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 454,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 4.2,
    //   category: 'Sports',
    //   seller_name: 'Shelby Joberne',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 27128,
    //   auto_upload: true
    // },
    // {
    //   id: 299,
    //   title: 'Business-focused encompassing success',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 390,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.4,
    //   category: 'Technology',
    //   seller_name: 'Shalne Petcher',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 54200,
    //   auto_upload: true
    // },
    // {
    //   id: 300,
    //   title: 'Multi-layered value-added task-force',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 861,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.0,
    //   category: 'Beauty',
    //   seller_name: 'Thaxter Hintzer',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 84474,
    //   auto_upload: true
    // },
    // {
    //   id: 301,
    //   title: 'Digitized impactful intranet',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 681,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.9,
    //   category: 'Technology',
    //   seller_name: 'Sibelle Ucceli',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 59500,
    //   auto_upload: true
    // },
    // {
    //   id: 302,
    //   title: 'Public-key human-resource projection',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 975,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.4,
    //   category: 'Toys',
    //   seller_name: 'Marga Kiwitz',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 20676,
    //   auto_upload: true
    // },
    // {
    //   id: 303,
    //   title: 'Operative tertiary portal',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 927,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.4,
    //   category: 'Animal',
    //   seller_name: 'Lelia Skevington',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 73186,
    //   auto_upload: false
    // },
    // {
    //   id: 304,
    //   title: 'Virtual modular contingency',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 198,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 3.7,
    //   category: 'Food',
    //   seller_name: 'Paul Burghall',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 81606,
    //   auto_upload: false
    // },
    // {
    //   id: 305,
    //   title: 'Mandatory stable frame',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 356,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.7,
    //   category: 'Superhero',
    //   seller_name: 'Aldric Van Dijk',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 47195,
    //   auto_upload: true
    // },
    // {
    //   id: 306,
    //   title: 'Configurable contextually-based algorithm',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 594,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.7,
    //   category: 'Fashion',
    //   seller_name: 'Edythe Norwich',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 10038,
    //   auto_upload: true
    // },
    // {
    //   id: 307,
    //   title: 'Face to face national methodology',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 831,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.0,
    //   category: 'Technology',
    //   seller_name: 'Elvis Risborough',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 96088,
    //   auto_upload: false
    // },
    // {
    //   id: 308,
    //   title: 'Fully-configurable directional ability',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 456,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 5.0,
    //   category: 'Superhero',
    //   seller_name: 'Bernadene Boarder',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 27076,
    //   auto_upload: true
    // },
    // {
    //   id: 309,
    //   title: 'Proactive local hub',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 202,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.2,
    //   category: 'Sports',
    //   seller_name: 'Hedy Woolveridge',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 38636,
    //   auto_upload: false
    // },
    // {
    //   id: 310,
    //   title: 'Devolved logistical matrices',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 797,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.5,
    //   category: 'Fashion',
    //   seller_name: 'Alejandro Forsaith',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 64861,
    //   auto_upload: true
    // },
    // {
    //   id: 311,
    //   title: 'Down-sized bottom-line implementation',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 304,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 4.7,
    //   category: 'Beauty',
    //   seller_name: 'Den Knight',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 31580,
    //   auto_upload: true
    // },
    // {
    //   id: 312,
    //   title: 'Sharable systemic info-mediaries',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 538,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.6,
    //   category: 'Animal',
    //   seller_name: 'Florentia Rattray',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 57844,
    //   auto_upload: true
    // },
    // {
    //   id: 313,
    //   title: 'Advanced impactful forecast',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 342,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 4.8,
    //   category: 'Food',
    //   seller_name: 'Jemima Slay',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 63737,
    //   auto_upload: true
    // },
    // {
    //   id: 314,
    //   title: 'Focused scalable data-warehouse',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 230,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.9,
    //   category: 'Books',
    //   seller_name: 'Winny Armsby',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 55586,
    //   auto_upload: false
    // },
    // {
    //   id: 315,
    //   title: 'Decentralized reciprocal productivity',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 998,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.5,
    //   category: 'Toys',
    //   seller_name: 'Cord Sterricks',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 82108,
    //   auto_upload: false
    // },
    // {
    //   id: 316,
    //   title: 'User-friendly user-facing success',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 877,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 3.8,
    //   category: 'Sports',
    //   seller_name: 'Cele Plain',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 7296,
    //   auto_upload: true
    // },
    // {
    //   id: 317,
    //   title: 'Intuitive multi-tasking help-desk',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 581,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 4.4,
    //   category: 'Books',
    //   seller_name: 'Franz Andrin',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 29628,
    //   auto_upload: true
    // },
    // {
    //   id: 318,
    //   title: 'Integrated value-added emulation',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 490,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.8,
    //   category: 'Toys',
    //   seller_name: 'Romain Rangeley',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 67089,
    //   auto_upload: false
    // },
    // {
    //   id: 319,
    //   title: 'Face to face clear-thinking portal',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 494,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.8,
    //   category: 'Sports',
    //   seller_name: 'Johna Grishunin',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 8227,
    //   auto_upload: true
    // },
    // {
    //   id: 320,
    //   title: 'Inverse reciprocal support',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 510,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.9,
    //   category: 'Home Decor',
    //   seller_name: 'Minnnie Noon',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 33872,
    //   auto_upload: true
    // },
    // {
    //   id: 321,
    //   title: 'De-engineered bandwidth-monitored open architecture',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 536,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 3.1,
    //   category: 'Sports',
    //   seller_name: 'Sumner Marshal',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 57971,
    //   auto_upload: true
    // },
    // {
    //   id: 322,
    //   title: 'Function-based 6th generation forecast',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 489,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 3.4,
    //   category: 'Toys',
    //   seller_name: 'Bobine Topliss',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 89492,
    //   auto_upload: false
    // },
    // {
    //   id: 323,
    //   title: 'Cloned dedicated process improvement',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 815,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 3.2,
    //   category: 'Food',
    //   seller_name: 'Port Kindleside',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 71284,
    //   auto_upload: false
    // },
    // {
    //   id: 324,
    //   title: 'Re-engineered bottom-line product',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 452,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 3.7,
    //   category: 'Books',
    //   seller_name: 'Denna Tansly',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 24546,
    //   auto_upload: true
    // },
    // {
    //   id: 325,
    //   title: 'Integrated user-facing matrix',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 740,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.9,
    //   category: 'Superhero',
    //   seller_name: 'Maritsa Cathesyed',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 51884,
    //   auto_upload: false
    // },
    // {
    //   id: 326,
    //   title: 'Centralized background challenge',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 846,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.7,
    //   category: 'Superhero',
    //   seller_name: 'Tucky Perrottet',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 19894,
    //   auto_upload: false
    // },
    // {
    //   id: 327,
    //   title: 'Up-sized well-modulated time-frame',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 286,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 4.8,
    //   category: 'Beauty',
    //   seller_name: 'Ad Kincey',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 50479,
    //   auto_upload: true
    // },
    // {
    //   id: 328,
    //   title: 'Re-contextualized intangible ability',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 897,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.4,
    //   category: 'Books',
    //   seller_name: 'Mala Gilbody',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 64648,
    //   auto_upload: false
    // },
    // {
    //   id: 329,
    //   title: 'Open-source human-resource matrix',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 305,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 3.9,
    //   category: 'Food',
    //   seller_name: 'Jana Eyam',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 11049,
    //   auto_upload: false
    // },
    // {
    //   id: 330,
    //   title: 'Public-key even-keeled collaboration',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 291,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.9,
    //   category: 'Technology',
    //   seller_name: 'Ilise Hutley',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 69267,
    //   auto_upload: true
    // },
    // {
    //   id: 331,
    //   title: 'Reduced secondary database',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 137,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.8,
    //   category: 'Technology',
    //   seller_name: 'Giralda Saurin',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 19238,
    //   auto_upload: false
    // },
    // {
    //   id: 332,
    //   title: 'Monitored 24 hour orchestration',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 321,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 5.0,
    //   category: 'Books',
    //   seller_name: 'Nisse Grundle',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 49556,
    //   auto_upload: false
    // },
    // {
    //   id: 333,
    //   title: 'Stand-alone object-oriented standardization',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 701,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.2,
    //   category: 'Superhero',
    //   seller_name: 'Locke Oldroyde',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 7086,
    //   auto_upload: true
    // },
    // {
    //   id: 334,
    //   title: 'Synergized uniform superstructure',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 776,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.6,
    //   category: 'Animal',
    //   seller_name: 'Vidovik Blaxton',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 46936,
    //   auto_upload: false
    // },
    // {
    //   id: 335,
    //   title: 'Ergonomic intermediate infrastructure',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 555,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 4.9,
    //   category: 'Superhero',
    //   seller_name: 'Halley Bute',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 88913,
    //   auto_upload: false
    // },
    // {
    //   id: 336,
    //   title: 'De-engineered eco-centric framework',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 230,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.0,
    //   category: 'Sports',
    //   seller_name: 'Randolf McGhee',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 57513,
    //   auto_upload: false
    // },
    // {
    //   id: 337,
    //   title: 'Face to face regional monitoring',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 735,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.1,
    //   category: 'Fashion',
    //   seller_name: 'Libbie Dimitresco',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 78854,
    //   auto_upload: true
    // },
    // {
    //   id: 338,
    //   title: 'Optional grid-enabled product',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 856,
    //   description:
    //     'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.7,
    //   category: 'Superhero',
    //   seller_name: 'Rickert Stiell',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 71734,
    //   auto_upload: false
    // },
    // {
    //   id: 339,
    //   title: 'Open-source 24/7 encoding',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 580,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.3,
    //   category: 'Fashion',
    //   seller_name: 'Billy Hackett',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 62252,
    //   auto_upload: true
    // },
    // {
    //   id: 340,
    //   title: 'Implemented grid-enabled encryption',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 115,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.1,
    //   category: 'Fashion',
    //   seller_name: 'Robbie Kloser',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 34170,
    //   auto_upload: false
    // },
    // {
    //   id: 341,
    //   title: 'Monitored system-worthy strategy',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 912,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    //   rating: 5.0,
    //   category: 'Sports',
    //   seller_name: "Jilly O'Tuohy",
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 5114,
    //   auto_upload: true
    // },
    // {
    //   id: 342,
    //   title: 'Switchable high-level alliance',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 466,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 3.1,
    //   category: 'Books',
    //   seller_name: 'Audre Abramov',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 53777,
    //   auto_upload: true
    // },
    // {
    //   id: 343,
    //   title: 'Triple-buffered impactful benchmark',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 106,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.4,
    //   category: 'Toys',
    //   seller_name: 'Ashton Sterzaker',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 38093,
    //   auto_upload: false
    // },
    // {
    //   id: 344,
    //   title: 'Total fault-tolerant infrastructure',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 345,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.8,
    //   category: 'Books',
    //   seller_name: 'Cale Mc Trusty',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 19332,
    //   auto_upload: false
    // },
    // {
    //   id: 345,
    //   title: 'Cross-platform system-worthy service-desk',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 92,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.6,
    //   category: 'Fashion',
    //   seller_name: 'Kent Saye',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 68383,
    //   auto_upload: false
    // },
    // {
    //   id: 346,
    //   title: 'Total system-worthy help-desk',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 597,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Yale Huglin',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 47393,
    //   auto_upload: false
    // },
    // {
    //   id: 347,
    //   title: 'Extended local success',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 396,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.0,
    //   category: 'Animal',
    //   seller_name: 'Ramon Penrith',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 73699,
    //   auto_upload: false
    // },
    // {
    //   id: 348,
    //   title: 'Mandatory disintermediate internet solution',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 354,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.4,
    //   category: 'Food',
    //   seller_name: 'Egon McLafferty',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 46581,
    //   auto_upload: false
    // },
    // {
    //   id: 349,
    //   title: 'Future-proofed optimizing challenge',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 211,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.5,
    //   category: 'Sports',
    //   seller_name: 'Selene Lockner',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 53707,
    //   auto_upload: false
    // },
    // {
    //   id: 350,
    //   title: 'Balanced systematic projection',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 409,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 4.5,
    //   category: 'Books',
    //   seller_name: 'Ellsworth Inston',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 74260,
    //   auto_upload: true
    // },
    // {
    //   id: 351,
    //   title: 'Pre-emptive zero administration analyzer',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 987,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 4.6,
    //   category: 'Toys',
    //   seller_name: 'Bethany Lorenc',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 40325,
    //   auto_upload: false
    // },
    // {
    //   id: 352,
    //   title: 'Centralized well-modulated data-warehouse',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 709,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.6,
    //   category: 'Home Decor',
    //   seller_name: 'Vassily Windybank',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 17638,
    //   auto_upload: true
    // },
    // {
    //   id: 353,
    //   title: 'Right-sized static emulation',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 762,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 3.0,
    //   category: 'Sports',
    //   seller_name: 'Rick Stedmond',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 71835,
    //   auto_upload: false
    // },
    // {
    //   id: 354,
    //   title: 'Adaptive interactive groupware',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 368,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 3.9,
    //   category: 'Superhero',
    //   seller_name: 'Agata Crusham',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 65508,
    //   auto_upload: true
    // },
    // {
    //   id: 355,
    //   title: 'Managed optimizing internet solution',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 447,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 5.0,
    //   category: 'Sports',
    //   seller_name: 'Maribeth Wison',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 81453,
    //   auto_upload: true
    // },
    // {
    //   id: 356,
    //   title: 'Fundamental motivating interface',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 587,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 4.7,
    //   category: 'Animal',
    //   seller_name: 'Adiana Goly',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 77295,
    //   auto_upload: false
    // },
    // {
    //   id: 357,
    //   title: 'Visionary object-oriented secured line',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 682,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.0,
    //   category: 'Fashion',
    //   seller_name: 'Nels Hagergham',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 28580,
    //   auto_upload: true
    // },
    // {
    //   id: 358,
    //   title: 'Diverse exuding open architecture',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 589,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.1,
    //   category: 'Food',
    //   seller_name: 'Giordano Torrent',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 94007,
    //   auto_upload: false
    // },
    // {
    //   id: 359,
    //   title: 'Extended multi-state portal',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 883,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.7,
    //   category: 'Fashion',
    //   seller_name: 'Dulcea Cleef',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 88147,
    //   auto_upload: true
    // },
    // {
    //   id: 360,
    //   title: 'Centralized reciprocal definition',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 236,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.3,
    //   category: 'Fashion',
    //   seller_name: 'Tamarra Morpeth',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 66662,
    //   auto_upload: true
    // },
    // {
    //   id: 361,
    //   title: 'Universal high-level analyzer',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 263,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.8,
    //   category: 'Fashion',
    //   seller_name: 'Eugene Antognoni',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 53384,
    //   auto_upload: false
    // },
    // {
    //   id: 362,
    //   title: 'Horizontal human-resource installation',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 269,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.8,
    //   category: 'Home Decor',
    //   seller_name: 'Lyell Hugonin',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 26053,
    //   auto_upload: false
    // },
    // {
    //   id: 363,
    //   title: 'Integrated 24 hour process improvement',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 544,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.9,
    //   category: 'Superhero',
    //   seller_name: 'Bab Pendred',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 83114,
    //   auto_upload: false
    // },
    // {
    //   id: 364,
    //   title: 'Streamlined 24 hour superstructure',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 691,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 3.7,
    //   category: 'Home Decor',
    //   seller_name: 'Jan Rizzone',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 29985,
    //   auto_upload: true
    // },
    // {
    //   id: 365,
    //   title: 'Profound context-sensitive adapter',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 740,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.7,
    //   category: 'Fashion',
    //   seller_name: 'Zaccaria Kierans',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 6289,
    //   auto_upload: false
    // },
    // {
    //   id: 366,
    //   title: 'Decentralized maximized forecast',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 853,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 3.2,
    //   category: 'Superhero',
    //   seller_name: 'Sigvard Placide',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 62863,
    //   auto_upload: false
    // },
    // {
    //   id: 367,
    //   title: 'Realigned radical methodology',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 545,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.6,
    //   category: 'Fashion',
    //   seller_name: 'Jaynell Diter',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 53820,
    //   auto_upload: false
    // },
    // {
    //   id: 368,
    //   title: 'Organic grid-enabled model',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 91,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.8,
    //   category: 'Beauty',
    //   seller_name: 'Ernesto Melson',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 84499,
    //   auto_upload: false
    // },
    // {
    //   id: 369,
    //   title: 'Customer-focused mission-critical knowledge base',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 813,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 4.8,
    //   category: 'Toys',
    //   seller_name: 'Kiri Daborne',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 16872,
    //   auto_upload: false
    // },
    // {
    //   id: 370,
    //   title: 'Progressive fault-tolerant monitoring',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 950,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.4,
    //   category: 'Toys',
    //   seller_name: 'Agna Rait',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 79298,
    //   auto_upload: true
    // },
    // {
    //   id: 371,
    //   title: 'Universal even-keeled groupware',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 337,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.5,
    //   category: 'Toys',
    //   seller_name: 'Kipp Scrivenor',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 57965,
    //   auto_upload: true
    // },
    // {
    //   id: 372,
    //   title: 'Ergonomic background Graphical User Interface',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 905,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 4.4,
    //   category: 'Books',
    //   seller_name: 'Orlan Megany',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 27205,
    //   auto_upload: true
    // },
    // {
    //   id: 373,
    //   title: 'Multi-channelled didactic encryption',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 938,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.8,
    //   category: 'Food',
    //   seller_name: 'Seka Castagnaro',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 49044,
    //   auto_upload: false
    // },
    // {
    //   id: 374,
    //   title: 'Reactive bi-directional model',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 63,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.4,
    //   category: 'Books',
    //   seller_name: 'Hetti Drewes',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 61336,
    //   auto_upload: true
    // },
    // {
    //   id: 375,
    //   title: 'Face to face logistical attitude',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 693,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.0,
    //   category: 'Food',
    //   seller_name: 'Booth Swait',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 42258,
    //   auto_upload: true
    // },
    // {
    //   id: 376,
    //   title: 'Proactive fresh-thinking architecture',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 86,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 5.0,
    //   category: 'Home Decor',
    //   seller_name: 'Yule Kinsman',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 39559,
    //   auto_upload: true
    // },
    // {
    //   id: 377,
    //   title: 'Open-source solution-oriented artificial intelligence',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 583,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.9,
    //   category: 'Books',
    //   seller_name: 'Lanie Screas',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 49116,
    //   auto_upload: true
    // },
    // {
    //   id: 378,
    //   title: 'Networked heuristic focus group',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 390,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.3,
    //   category: 'Beauty',
    //   seller_name: 'Goldina Dominique',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 97342,
    //   auto_upload: false
    // },
    // {
    //   id: 379,
    //   title: 'Multi-lateral motivating benchmark',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 175,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.2,
    //   category: 'Beauty',
    //   seller_name: 'Myrtie Windybank',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 72677,
    //   auto_upload: true
    // },
    // {
    //   id: 380,
    //   title: 'Stand-alone maximized standardization',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 198,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.2,
    //   category: 'Animal',
    //   seller_name: 'Kenna Robey',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 35447,
    //   auto_upload: false
    // },
    // {
    //   id: 381,
    //   title: 'Open-architected transitional open architecture',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 728,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.4,
    //   category: 'Toys',
    //   seller_name: 'Welby Burgane',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 68549,
    //   auto_upload: true
    // },
    // {
    //   id: 382,
    //   title: 'Implemented directional analyzer',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 783,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 3.0,
    //   category: 'Books',
    //   seller_name: 'Sammy Allkins',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 92846,
    //   auto_upload: false
    // },
    // {
    //   id: 383,
    //   title: 'Adaptive demand-driven software',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 216,
    //   description:
    //     'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Clarita Georgel',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 5021,
    //   auto_upload: false
    // },
    // {
    //   id: 384,
    //   title: 'Diverse motivating moratorium',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 432,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.9,
    //   category: 'Fashion',
    //   seller_name: 'Marillin Coite',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 97205,
    //   auto_upload: false
    // },
    // {
    //   id: 385,
    //   title: 'Adaptive non-volatile productivity',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 599,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 4.2,
    //   category: 'Books',
    //   seller_name: 'Myrtice Scurrer',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 81753,
    //   auto_upload: true
    // },
    // {
    //   id: 386,
    //   title: 'Synchronised solution-oriented Graphical User Interface',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 848,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.1,
    //   category: 'Superhero',
    //   seller_name: 'Anabal Bonde',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 32793,
    //   auto_upload: false
    // },
    // {
    //   id: 387,
    //   title: 'Reactive systemic neural-net',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 261,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.3,
    //   category: 'Food',
    //   seller_name: 'Nobe Sincock',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 39266,
    //   auto_upload: true
    // },
    // {
    //   id: 388,
    //   title: 'Synergized intangible extranet',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 684,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.0,
    //   category: 'Animal',
    //   seller_name: 'Emelina Bains',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 31059,
    //   auto_upload: false
    // },
    // {
    //   id: 389,
    //   title: 'Advanced global time-frame',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 973,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 4.4,
    //   category: 'Sports',
    //   seller_name: 'Abbie Swanger',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 89704,
    //   auto_upload: false
    // },
    // {
    //   id: 390,
    //   title: 'Visionary interactive algorithm',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 457,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.1,
    //   category: 'Food',
    //   seller_name: 'Nerty Rawsthorne',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 26690,
    //   auto_upload: true
    // },
    // {
    //   id: 391,
    //   title: 'User-centric bandwidth-monitored methodology',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 792,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.2,
    //   category: 'Home Decor',
    //   seller_name: 'Tamarra Halvorsen',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 87551,
    //   auto_upload: false
    // },
    // {
    //   id: 392,
    //   title: 'Cross-group background middleware',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 657,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.4,
    //   category: 'Fashion',
    //   seller_name: 'Odille Bonson',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 33791,
    //   auto_upload: false
    // },
    // {
    //   id: 393,
    //   title: 'Optional full-range moratorium',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 740,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 3.3,
    //   category: 'Toys',
    //   seller_name: 'Elva Madigan',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 38626,
    //   auto_upload: false
    // },
    // {
    //   id: 394,
    //   title: 'Persistent 4th generation approach',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 359,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.7,
    //   category: 'Toys',
    //   seller_name: 'Elwira Beamiss',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 12249,
    //   auto_upload: true
    // },
    // {
    //   id: 395,
    //   title: 'Innovative explicit benchmark',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 317,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.7,
    //   category: 'Books',
    //   seller_name: 'Rusty Pearl',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 77452,
    //   auto_upload: false
    // },
    // {
    //   id: 396,
    //   title: 'Focused zero tolerance moderator',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 193,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 5.0,
    //   category: 'Technology',
    //   seller_name: 'Lucita Baughn',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 60031,
    //   auto_upload: false
    // },
    // {
    //   id: 397,
    //   title: 'User-friendly zero tolerance access',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 188,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 3.8,
    //   category: 'Books',
    //   seller_name: 'Liliane Leafe',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 79663,
    //   auto_upload: true
    // },
    // {
    //   id: 398,
    //   title: 'Organized multimedia adapter',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 141,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 3.0,
    //   category: 'Technology',
    //   seller_name: 'Pier Langelay',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 66537,
    //   auto_upload: false
    // },
    // {
    //   id: 399,
    //   title: 'Inverse contextually-based ability',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 323,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 4.6,
    //   category: 'Books',
    //   seller_name: 'Dyane McConaghy',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 56217,
    //   auto_upload: false
    // },
    // {
    //   id: 400,
    //   title: 'Optional upward-trending Graphic Interface',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 411,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.4,
    //   category: 'Sports',
    //   seller_name: 'Lemuel Stang-Gjertsen',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 82902,
    //   auto_upload: false
    // },
    // {
    //   id: 401,
    //   title: 'Face to face object-oriented workforce',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 488,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.3,
    //   category: 'Superhero',
    //   seller_name: 'Augie Tollady',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 19883,
    //   auto_upload: true
    // },
    // {
    //   id: 402,
    //   title: 'Innovative user-facing extranet',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 244,
    //   description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.0,
    //   category: 'Home Decor',
    //   seller_name: 'Isador Keel',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 62692,
    //   auto_upload: false
    // },
    // {
    //   id: 403,
    //   title: 'Decentralized bifurcated website',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 829,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.2,
    //   category: 'Superhero',
    //   seller_name: 'Anastasie Steinham',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 82449,
    //   auto_upload: false
    // },
    // {
    //   id: 404,
    //   title: 'Persevering dynamic ability',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 429,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.6,
    //   category: 'Animal',
    //   seller_name: 'Brear Carey',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 93050,
    //   auto_upload: false
    // },
    // {
    //   id: 405,
    //   title: 'Persevering multimedia flexibility',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 996,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.6,
    //   category: 'Food',
    //   seller_name: 'Genny Yegoshin',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 78282,
    //   auto_upload: false
    // },
    // {
    //   id: 406,
    //   title: 'Down-sized zero defect leverage',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 738,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.2,
    //   category: 'Sports',
    //   seller_name: 'Dulsea Union',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 90413,
    //   auto_upload: true
    // },
    // {
    //   id: 407,
    //   title: 'Configurable actuating implementation',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 169,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.1,
    //   category: 'Sports',
    //   seller_name: 'Tades Dobbie',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 95819,
    //   auto_upload: true
    // },
    // {
    //   id: 408,
    //   title: 'Multi-layered reciprocal middleware',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 320,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 3.2,
    //   category: 'Technology',
    //   seller_name: 'Robbie Dunstall',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 88977,
    //   auto_upload: true
    // },
    // {
    //   id: 409,
    //   title: 'Open-source dedicated complexity',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 755,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 5.0,
    //   category: 'Books',
    //   seller_name: 'Giacomo Gifkins',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 97966,
    //   auto_upload: true
    // },
    // {
    //   id: 410,
    //   title: 'Multi-channelled fault-tolerant strategy',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 616,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.0,
    //   category: 'Toys',
    //   seller_name: 'Inness Ruprich',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 37865,
    //   auto_upload: true
    // },
    // {
    //   id: 411,
    //   title: 'Re-contextualized 4th generation internet solution',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 178,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.0,
    //   category: 'Beauty',
    //   seller_name: 'Jane Mallindine',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 90617,
    //   auto_upload: true
    // },
    // {
    //   id: 412,
    //   title: 'Universal multi-state Graphical User Interface',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 271,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Egan Bream',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 49535,
    //   auto_upload: true
    // },
    // {
    //   id: 413,
    //   title: 'Right-sized even-keeled system engine',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 790,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.2,
    //   category: 'Superhero',
    //   seller_name: 'Rosalind Staddart',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 31345,
    //   auto_upload: true
    // },
    // {
    //   id: 414,
    //   title: 'Pre-emptive 24 hour moratorium',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 800,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.3,
    //   category: 'Toys',
    //   seller_name: 'Malchy Moses',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 5486,
    //   auto_upload: false
    // },
    // {
    //   id: 415,
    //   title: 'Devolved stable policy',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 518,
    //   description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.4,
    //   category: 'Toys',
    //   seller_name: 'Maitilde Brognot',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 28695,
    //   auto_upload: false
    // },
    // {
    //   id: 416,
    //   title: 'Object-based eco-centric methodology',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 533,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 3.9,
    //   category: 'Toys',
    //   seller_name: 'Keelia McMeeking',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 76487,
    //   auto_upload: false
    // },
    // {
    //   id: 417,
    //   title: 'Self-enabling object-oriented capability',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 125,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 4.7,
    //   category: 'Home Decor',
    //   seller_name: 'Andriette Brodbin',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 44387,
    //   auto_upload: true
    // },
    // {
    //   id: 418,
    //   title: 'Multi-channelled local instruction set',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 194,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.0,
    //   category: 'Toys',
    //   seller_name: 'Dennison McCleod',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 57200,
    //   auto_upload: true
    // },
    // {
    //   id: 419,
    //   title: 'Re-engineered global frame',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 971,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 4.9,
    //   category: 'Food',
    //   seller_name: 'Editha Chaff',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 99105,
    //   auto_upload: true
    // },
    // {
    //   id: 420,
    //   title: 'Object-based homogeneous flexibility',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 761,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.2,
    //   category: 'Home Decor',
    //   seller_name: 'Olympia Golden',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 94240,
    //   auto_upload: true
    // },
    // {
    //   id: 421,
    //   title: 'Configurable interactive paradigm',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 399,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.5,
    //   category: 'Beauty',
    //   seller_name: 'Urban Plenty',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 36190,
    //   auto_upload: false
    // },
    // {
    //   id: 422,
    //   title: 'Balanced maximized forecast',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 691,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.4,
    //   category: 'Toys',
    //   seller_name: 'Merrill Raddish',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 45905,
    //   auto_upload: false
    // },
    // {
    //   id: 423,
    //   title: 'Business-focused national focus group',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 776,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 4.6,
    //   category: 'Animal',
    //   seller_name: 'Marta Kondrat',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 71927,
    //   auto_upload: true
    // },
    // {
    //   id: 424,
    //   title: 'Horizontal contextually-based matrix',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 795,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.0,
    //   category: 'Toys',
    //   seller_name: 'Jeanna Gerrietz',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 28896,
    //   auto_upload: false
    // },
    // {
    //   id: 425,
    //   title: 'Multi-tiered asymmetric policy',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 418,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.6,
    //   category: 'Animal',
    //   seller_name: 'Carce Shelmerdine',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 69897,
    //   auto_upload: true
    // },
    // {
    //   id: 426,
    //   title: 'Fully-configurable bandwidth-monitored synergy',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 710,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 3.4,
    //   category: 'Food',
    //   seller_name: 'Kerr Pimblott',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 8374,
    //   auto_upload: false
    // },
    // {
    //   id: 427,
    //   title: 'Devolved systemic info-mediaries',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 112,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.5,
    //   category: 'Toys',
    //   seller_name: 'Patrizia Goodbarr',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 11114,
    //   auto_upload: false
    // },
    // {
    //   id: 428,
    //   title: 'Front-line motivating encryption',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 480,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 4.3,
    //   category: 'Animal',
    //   seller_name: 'Marven Hurlestone',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 59995,
    //   auto_upload: true
    // },
    // {
    //   id: 429,
    //   title: 'Intuitive system-worthy moderator',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 553,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 4.3,
    //   category: 'Technology',
    //   seller_name: 'Cristin Spinige',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 66721,
    //   auto_upload: true
    // },
    // {
    //   id: 430,
    //   title: 'Customer-focused fresh-thinking structure',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 415,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.5,
    //   category: 'Home Decor',
    //   seller_name: 'Lela McArd',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 43282,
    //   auto_upload: false
    // },
    // {
    //   id: 431,
    //   title: 'Multi-tiered bifurcated orchestration',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 149,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 4.7,
    //   category: 'Food',
    //   seller_name: 'Kelby De Francisci',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 99693,
    //   auto_upload: true
    // },
    // {
    //   id: 432,
    //   title: 'Intuitive object-oriented focus group',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 933,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.4,
    //   category: 'Beauty',
    //   seller_name: 'Ardyth Stubbert',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 84594,
    //   auto_upload: false
    // },
    // {
    //   id: 433,
    //   title: 'Organized bottom-line toolset',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 936,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.6,
    //   category: 'Animal',
    //   seller_name: 'Araldo Fahey',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 68063,
    //   auto_upload: true
    // },
    // {
    //   id: 434,
    //   title: 'Configurable national ability',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 133,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 4.8,
    //   category: 'Fashion',
    //   seller_name: 'Miranda McKinley',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 98165,
    //   auto_upload: true
    // },
    // {
    //   id: 435,
    //   title: 'Visionary attitude-oriented throughput',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 574,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.7,
    //   category: 'Home Decor',
    //   seller_name: 'Gabriell Folks',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 51867,
    //   auto_upload: true
    // },
    // {
    //   id: 436,
    //   title: 'Horizontal regional project',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 235,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 3.6,
    //   category: 'Toys',
    //   seller_name: 'Dora Lerven',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 58669,
    //   auto_upload: false
    // },
    // {
    //   id: 437,
    //   title: 'User-friendly impactful definition',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 199,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 4.4,
    //   category: 'Books',
    //   seller_name: 'Peyter Padgham',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 37756,
    //   auto_upload: false
    // },
    // {
    //   id: 438,
    //   title: 'Automated empowering hub',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 877,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.5,
    //   category: 'Books',
    //   seller_name: 'Artemis Wardale',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 74329,
    //   auto_upload: true
    // },
    // {
    //   id: 439,
    //   title: 'Ameliorated mobile database',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 684,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.1,
    //   category: 'Books',
    //   seller_name: 'Daren Bloy',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 8491,
    //   auto_upload: false
    // },
    // {
    //   id: 440,
    //   title: 'Total homogeneous benchmark',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 640,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.3,
    //   category: 'Books',
    //   seller_name: 'Jakob Trustrie',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 64486,
    //   auto_upload: false
    // },
    // {
    //   id: 441,
    //   title: 'Balanced solution-oriented flexibility',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 150,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.0,
    //   category: 'Beauty',
    //   seller_name: 'Erna Lefley',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 92870,
    //   auto_upload: true
    // },
    // {
    //   id: 442,
    //   title: 'Balanced regional hardware',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 198,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 3.1,
    //   category: 'Toys',
    //   seller_name: 'Emlynn Fairpo',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 97333,
    //   auto_upload: false
    // },
    // {
    //   id: 443,
    //   title: 'Secured 24 hour paradigm',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 660,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.5,
    //   category: 'Technology',
    //   seller_name: 'Debera Beagles',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 64698,
    //   auto_upload: false
    // },
    // {
    //   id: 444,
    //   title: 'Upgradable discrete open architecture',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 133,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Darb Swinfon',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 50620,
    //   auto_upload: false
    // },
    // {
    //   id: 445,
    //   title: 'Synergistic coherent toolset',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 428,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 4.1,
    //   category: 'Books',
    //   seller_name: 'Isadore Bravington',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 80886,
    //   auto_upload: true
    // },
    // {
    //   id: 446,
    //   title: 'Seamless stable structure',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 791,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.9,
    //   category: 'Sports',
    //   seller_name: 'Robenia Schwanden',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 81782,
    //   auto_upload: true
    // },
    // {
    //   id: 447,
    //   title: 'Configurable heuristic system engine',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 681,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.2,
    //   category: 'Beauty',
    //   seller_name: 'Tove Yearne',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 42767,
    //   auto_upload: false
    // },
    // {
    //   id: 448,
    //   title: 'Organized multi-tasking throughput',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 941,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 4.9,
    //   category: 'Technology',
    //   seller_name: 'Francklin Borge',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 34288,
    //   auto_upload: true
    // },
    // {
    //   id: 449,
    //   title: 'Function-based systemic toolset',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 333,
    //   description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.9,
    //   category: 'Animal',
    //   seller_name: 'Bliss Kearle',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 54446,
    //   auto_upload: false
    // },
    // {
    //   id: 450,
    //   title: 'Networked asymmetric budgetary management',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 421,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.4,
    //   category: 'Home Decor',
    //   seller_name: 'Janeva Drew-Clifton',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 55402,
    //   auto_upload: false
    // },
    // {
    //   id: 451,
    //   title: 'Synergized non-volatile application',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 606,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.5,
    //   category: 'Sports',
    //   seller_name: 'Morrie Spender',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 82387,
    //   auto_upload: true
    // },
    // {
    //   id: 452,
    //   title: 'Cross-platform system-worthy firmware',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 699,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 4.0,
    //   category: 'Superhero',
    //   seller_name: 'Theresina Witheford',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 94831,
    //   auto_upload: true
    // },
    // {
    //   id: 453,
    //   title: 'Integrated 24/7 internet solution',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 962,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Simonette Lassell',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 27908,
    //   auto_upload: false
    // },
    // {
    //   id: 454,
    //   title: 'Reactive dynamic task-force',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 752,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 4.3,
    //   category: 'Technology',
    //   seller_name: 'Ardith Giraudou',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 63603,
    //   auto_upload: false
    // },
    // {
    //   id: 455,
    //   title: 'Front-line clear-thinking info-mediaries',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 434,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 4.2,
    //   category: 'Superhero',
    //   seller_name: 'Dick Gough',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 75025,
    //   auto_upload: false
    // },
    // {
    //   id: 456,
    //   title: 'Profit-focused 3rd generation implementation',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 794,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.5,
    //   category: 'Sports',
    //   seller_name: 'Filippo Keitley',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 75560,
    //   auto_upload: false
    // },
    // {
    //   id: 457,
    //   title: 'Cloned radical monitoring',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 790,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.0,
    //   category: 'Animal',
    //   seller_name: 'Dominic Tofpik',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 40604,
    //   auto_upload: true
    // },
    // {
    //   id: 458,
    //   title: 'Secured tertiary contingency',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 920,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.8,
    //   category: 'Animal',
    //   seller_name: 'Cosmo Brideoke',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 80107,
    //   auto_upload: false
    // },
    // {
    //   id: 459,
    //   title: 'Integrated dynamic initiative',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 851,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.0,
    //   category: 'Books',
    //   seller_name: 'Amandi Fauguel',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 70188,
    //   auto_upload: false
    // },
    // {
    //   id: 460,
    //   title: 'User-centric composite methodology',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 597,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 4.8,
    //   category: 'Books',
    //   seller_name: 'Lloyd Cabell',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 25803,
    //   auto_upload: true
    // },
    // {
    //   id: 461,
    //   title: 'Reduced solution-oriented moderator',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 435,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.0,
    //   category: 'Home Decor',
    //   seller_name: 'Dee dee Curner',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 96259,
    //   auto_upload: false
    // },
    // {
    //   id: 462,
    //   title: 'Down-sized neutral algorithm',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 973,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 4.2,
    //   category: 'Technology',
    //   seller_name: 'Felicle Diego',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 40967,
    //   auto_upload: false
    // },
    // {
    //   id: 463,
    //   title: 'Automated global methodology',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 886,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 3.7,
    //   category: 'Fashion',
    //   seller_name: 'Evelina Ivins',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 77331,
    //   auto_upload: true
    // },
    // {
    //   id: 464,
    //   title: 'Advanced disintermediate portal',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 676,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.8,
    //   category: 'Superhero',
    //   seller_name: 'Reube Syme',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 98503,
    //   auto_upload: false
    // },
    // {
    //   id: 465,
    //   title: 'Persevering logistical archive',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 905,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.6,
    //   category: 'Animal',
    //   seller_name: 'Martelle Sherel',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 15746,
    //   auto_upload: true
    // },
    // {
    //   id: 466,
    //   title: 'Total object-oriented functionalities',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 910,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.5,
    //   category: 'Home Decor',
    //   seller_name: 'Ellsworth Andrea',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 22638,
    //   auto_upload: false
    // },
    // {
    //   id: 467,
    //   title: 'Fundamental 3rd generation conglomeration',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 355,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 3.8,
    //   category: 'Home Decor',
    //   seller_name: 'Veradis Caen',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 17584,
    //   auto_upload: true
    // },
    // {
    //   id: 468,
    //   title: 'Fundamental client-server moratorium',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 452,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 4.2,
    //   category: 'Superhero',
    //   seller_name: 'Lloyd Barnicott',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 91109,
    //   auto_upload: false
    // },
    // {
    //   id: 469,
    //   title: 'Assimilated high-level product',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 428,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.3,
    //   category: 'Technology',
    //   seller_name: 'Rhonda Camoletto',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 84226,
    //   auto_upload: false
    // },
    // {
    //   id: 470,
    //   title: 'Multi-tiered incremental standardization',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 563,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 3.8,
    //   category: 'Sports',
    //   seller_name: 'Lonni Vasnetsov',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 18592,
    //   auto_upload: false
    // },
    // {
    //   id: 471,
    //   title: 'Mandatory regional hub',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 497,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.3,
    //   category: 'Books',
    //   seller_name: 'Ryley Heinl',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 92242,
    //   auto_upload: false
    // },
    // {
    //   id: 472,
    //   title: 'Universal encompassing superstructure',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 746,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 4.4,
    //   category: 'Fashion',
    //   seller_name: 'Maddie Boaler',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 39418,
    //   auto_upload: true
    // },
    // {
    //   id: 473,
    //   title: 'Profit-focused radical focus group',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 844,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.7,
    //   category: 'Fashion',
    //   seller_name: 'Guillermo Kupker',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 85817,
    //   auto_upload: false
    // },
    // {
    //   id: 474,
    //   title: 'Right-sized maximized matrices',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 735,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.0,
    //   category: 'Food',
    //   seller_name: 'Rochell Kilfedder',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 68013,
    //   auto_upload: true
    // },
    // {
    //   id: 475,
    //   title: 'Reverse-engineered clear-thinking knowledge user',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 863,
    //   description:
    //     'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 4.0,
    //   category: 'Toys',
    //   seller_name: 'Sephira Newlyn',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 73159,
    //   auto_upload: false
    // },
    // {
    //   id: 476,
    //   title: 'Versatile modular functionalities',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 864,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 3.4,
    //   category: 'Beauty',
    //   seller_name: 'Pegeen Ledward',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 86934,
    //   auto_upload: false
    // },
    // {
    //   id: 477,
    //   title: 'Business-focused dedicated database',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 359,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.5,
    //   category: 'Animal',
    //   seller_name: 'Torrey Whetnell',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 15167,
    //   auto_upload: true
    // },
    // {
    //   id: 478,
    //   title: 'Extended 24/7 benchmark',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 843,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.6,
    //   category: 'Technology',
    //   seller_name: 'Waylin Armer',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 87982,
    //   auto_upload: false
    // },
    // {
    //   id: 479,
    //   title: 'Customer-focused bandwidth-monitored collaboration',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 366,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.6,
    //   category: 'Sports',
    //   seller_name: 'Teirtza Poppleston',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 23324,
    //   auto_upload: true
    // },
    // {
    //   id: 480,
    //   title: 'Multi-tiered disintermediate focus group',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 743,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.9,
    //   category: 'Technology',
    //   seller_name: 'Gay Enders',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 54949,
    //   auto_upload: false
    // },
    // {
    //   id: 481,
    //   title: 'Centralized motivating access',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 407,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.7,
    //   category: 'Sports',
    //   seller_name: 'Deloria Brandle',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 80291,
    //   auto_upload: false
    // },
    // {
    //   id: 482,
    //   title: 'Customizable demand-driven budgetary management',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 566,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 4.5,
    //   category: 'Sports',
    //   seller_name: 'Guillema Durand',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 6766,
    //   auto_upload: false
    // },
    // {
    //   id: 483,
    //   title: 'Function-based composite migration',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 155,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 4.9,
    //   category: 'Animal',
    //   seller_name: 'Miltie Dellenbrook',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 46413,
    //   auto_upload: true
    // },
    // {
    //   id: 484,
    //   title: 'Fundamental bifurcated conglomeration',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 624,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.6,
    //   category: 'Animal',
    //   seller_name: 'Dennie Adamkiewicz',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 62628,
    //   auto_upload: false
    // },
    // {
    //   id: 485,
    //   title: 'Streamlined bifurcated database',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 550,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.2,
    //   category: 'Books',
    //   seller_name: 'Dasie Posnett',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 91225,
    //   auto_upload: false
    // },
    // {
    //   id: 486,
    //   title: 'Intuitive high-level groupware',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 493,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.3,
    //   category: 'Toys',
    //   seller_name: 'Nestor Lowell',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 92097,
    //   auto_upload: true
    // },
    // {
    //   id: 487,
    //   title: 'Front-line exuding frame',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 734,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 4.7,
    //   category: 'Sports',
    //   seller_name: 'Ben Try',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 23002,
    //   auto_upload: true
    // },
    // {
    //   id: 488,
    //   title: 'Decentralized exuding matrix',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 410,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.1,
    //   category: 'Fashion',
    //   seller_name: 'Danette Smalridge',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 88525,
    //   auto_upload: true
    // },
    // {
    //   id: 489,
    //   title: 'Digitized zero tolerance adapter',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 466,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.0,
    //   category: 'Sports',
    //   seller_name: 'Ellene Simmell',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 10308,
    //   auto_upload: true
    // },
    // {
    //   id: 490,
    //   title: 'Implemented fresh-thinking definition',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 428,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.5,
    //   category: 'Technology',
    //   seller_name: 'Dorena Paladino',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 88170,
    //   auto_upload: true
    // },
    // {
    //   id: 491,
    //   title: 'Fundamental high-level parallelism',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 204,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: 'Mic Willatt',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 7555,
    //   auto_upload: false
    // },
    // {
    //   id: 492,
    //   title: 'Right-sized user-facing policy',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 980,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.0,
    //   category: 'Toys',
    //   seller_name: 'Hart Anderl',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 31820,
    //   auto_upload: false
    // },
    // {
    //   id: 493,
    //   title: 'User-friendly logistical initiative',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 731,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.5,
    //   category: 'Toys',
    //   seller_name: 'Aliza Scates',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 53094,
    //   auto_upload: false
    // },
    // {
    //   id: 494,
    //   title: 'Mandatory background orchestration',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 402,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 3.4,
    //   category: 'Animal',
    //   seller_name: 'Kettie Glencorse',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 71856,
    //   auto_upload: false
    // },
    // {
    //   id: 495,
    //   title: 'Function-based 5th generation artificial intelligence',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 590,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.6,
    //   category: 'Sports',
    //   seller_name: 'Pippa Buff',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 24385,
    //   auto_upload: true
    // },
    // {
    //   id: 496,
    //   title: 'Polarised multi-state moderator',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 365,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.4,
    //   category: 'Technology',
    //   seller_name: 'Ozzie Cotherill',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 83761,
    //   auto_upload: true
    // },
    // {
    //   id: 497,
    //   title: 'Ergonomic intermediate implementation',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 758,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.7,
    //   category: 'Sports',
    //   seller_name: 'Allie Fenna',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 42114,
    //   auto_upload: true
    // },
    // {
    //   id: 498,
    //   title: 'Diverse tangible matrices',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 263,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.5,
    //   category: 'Superhero',
    //   seller_name: 'Hastings Mignot',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 63853,
    //   auto_upload: false
    // },
    // {
    //   id: 499,
    //   title: 'Inverse local core',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 647,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.5,
    //   category: 'Technology',
    //   seller_name: 'Tabbie Colaton',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 69827,
    //   auto_upload: true
    // },
    // {
    //   id: 500,
    //   title: 'Versatile responsive secured line',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 513,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.2,
    //   category: 'Beauty',
    //   seller_name: 'Kermy Walkley',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 17134,
    //   auto_upload: false
    // },
    // {
    //   id: 501,
    //   title: 'Universal client-server matrix',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 593,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.9,
    //   category: 'Home Decor',
    //   seller_name: 'Zebulon Burdin',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 12225,
    //   auto_upload: true
    // },
    // {
    //   id: 502,
    //   title: 'Pre-emptive empowering interface',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 303,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.9,
    //   category: 'Superhero',
    //   seller_name: 'Lorene Busswell',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 60051,
    //   auto_upload: true
    // },
    // {
    //   id: 503,
    //   title: 'Pre-emptive upward-trending conglomeration',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 449,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 3.1,
    //   category: 'Sports',
    //   seller_name: 'Claudette Denniss',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 56578,
    //   auto_upload: false
    // },
    // {
    //   id: 504,
    //   title: 'Distributed encompassing product',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 366,
    //   description:
    //     'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.5,
    //   category: 'Technology',
    //   seller_name: 'Katha Girsch',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 82357,
    //   auto_upload: false
    // },
    // {
    //   id: 505,
    //   title: 'Synchronised needs-based superstructure',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 159,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 4.1,
    //   category: 'Home Decor',
    //   seller_name: 'Felisha Travers',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 23768,
    //   auto_upload: true
    // },
    // {
    //   id: 506,
    //   title: 'Assimilated 6th generation extranet',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 774,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.8,
    //   category: 'Sports',
    //   seller_name: 'Nonie Brewin',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 47780,
    //   auto_upload: true
    // },
    // {
    //   id: 507,
    //   title: 'Proactive content-based implementation',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 661,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 5.0,
    //   category: 'Animal',
    //   seller_name: "Anny O'Mara",
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 96219,
    //   auto_upload: false
    // },
    // {
    //   id: 508,
    //   title: 'Intuitive bifurcated core',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 908,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 3.3,
    //   category: 'Sports',
    //   seller_name: 'Kit Szymczyk',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 24987,
    //   auto_upload: false
    // },
    // {
    //   id: 509,
    //   title: 'Synergistic client-driven workforce',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 126,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.7,
    //   category: 'Animal',
    //   seller_name: 'Yolande Larvor',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 17448,
    //   auto_upload: true
    // },
    // {
    //   id: 510,
    //   title: 'Profit-focused web-enabled attitude',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 539,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.9,
    //   category: 'Fashion',
    //   seller_name: 'Bernard Lesaunier',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 84137,
    //   auto_upload: true
    // },
    // {
    //   id: 511,
    //   title: 'Exclusive full-range utilisation',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 759,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.1,
    //   category: 'Books',
    //   seller_name: 'Catherine Arundel',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 46604,
    //   auto_upload: false
    // },
    // {
    //   id: 512,
    //   title: 'Adaptive impactful protocol',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 144,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.4,
    //   category: 'Fashion',
    //   seller_name: 'Michael Van Merwe',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 99373,
    //   auto_upload: true
    // },
    // {
    //   id: 513,
    //   title: 'Innovative grid-enabled secured line',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 336,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.0,
    //   category: 'Books',
    //   seller_name: 'Erin Tiltman',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 63331,
    //   auto_upload: true
    // },
    // {
    //   id: 514,
    //   title: 'Exclusive leading edge approach',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 674,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 4.8,
    //   category: 'Fashion',
    //   seller_name: 'Deni Palffy',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 23754,
    //   auto_upload: true
    // },
    // {
    //   id: 515,
    //   title: 'Realigned empowering initiative',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 740,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 4.5,
    //   category: 'Sports',
    //   seller_name: 'Aurlie Gronous',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 69927,
    //   auto_upload: false
    // },
    // {
    //   id: 516,
    //   title: 'Focused background artificial intelligence',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 351,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.1,
    //   category: 'Food',
    //   seller_name: 'Leone Shapero',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 69091,
    //   auto_upload: true
    // },
    // {
    //   id: 517,
    //   title: 'Stand-alone radical implementation',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 770,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.7,
    //   category: 'Toys',
    //   seller_name: 'Norby Bartos',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 54396,
    //   auto_upload: false
    // },
    // {
    //   id: 518,
    //   title: 'User-centric local Graphic Interface',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 299,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.7,
    //   category: 'Toys',
    //   seller_name: 'Miguela Giercke',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 30670,
    //   auto_upload: true
    // },
    // {
    //   id: 519,
    //   title: 'Reactive next generation internet solution',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 404,
    //   description:
    //     'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.5,
    //   category: 'Food',
    //   seller_name: 'Northrup Moye',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 84928,
    //   auto_upload: true
    // },
    // {
    //   id: 520,
    //   title: 'Streamlined multi-state protocol',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 209,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.8,
    //   category: 'Animal',
    //   seller_name: 'Brew Vanyushin',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 87761,
    //   auto_upload: false
    // },
    // {
    //   id: 521,
    //   title: 'Customizable tangible array',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 264,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.5,
    //   category: 'Animal',
    //   seller_name: 'Krysta Newe',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 97972,
    //   auto_upload: true
    // },
    // {
    //   id: 522,
    //   title: 'Expanded value-added initiative',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 251,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: 'Ashley Whiscard',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 73668,
    //   auto_upload: true
    // },
    // {
    //   id: 523,
    //   title: 'Virtual bi-directional paradigm',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 321,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.4,
    //   category: 'Beauty',
    //   seller_name: 'Darya Jovis',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 85730,
    //   auto_upload: true
    // },
    // {
    //   id: 524,
    //   title: 'Realigned 4th generation moderator',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 335,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.2,
    //   category: 'Sports',
    //   seller_name: 'Carlin Derrington',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 38552,
    //   auto_upload: true
    // },
    // {
    //   id: 525,
    //   title: 'Robust local approach',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 789,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 3.6,
    //   category: 'Animal',
    //   seller_name: 'Vale Snoddon',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 71205,
    //   auto_upload: true
    // },
    // {
    //   id: 526,
    //   title: 'Quality-focused maximized Graphic Interface',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 352,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 3.9,
    //   category: 'Books',
    //   seller_name: 'Willetta Whitcher',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 75374,
    //   auto_upload: true
    // },
    // {
    //   id: 527,
    //   title: 'Future-proofed bandwidth-monitored core',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 857,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.2,
    //   category: 'Superhero',
    //   seller_name: 'Rana Gange',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 82938,
    //   auto_upload: false
    // },
    // {
    //   id: 528,
    //   title: 'Open-source responsive definition',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 445,
    //   description:
    //     'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 3.0,
    //   category: 'Technology',
    //   seller_name: 'Tilda Quinevan',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 84421,
    //   auto_upload: false
    // },
    // {
    //   id: 529,
    //   title: 'Organized global analyzer',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 105,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.2,
    //   category: 'Fashion',
    //   seller_name: 'Dee Schoenleiter',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 51193,
    //   auto_upload: true
    // },
    // {
    //   id: 530,
    //   title: 'Total client-server matrices',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 136,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 4.8,
    //   category: 'Books',
    //   seller_name: 'Margaux Catteroll',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 62575,
    //   auto_upload: false
    // },
    // {
    //   id: 531,
    //   title: 'Multi-layered 3rd generation capacity',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 113,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.8,
    //   category: 'Sports',
    //   seller_name: 'Jameson Bittlestone',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 41182,
    //   auto_upload: false
    // },
    // {
    //   id: 532,
    //   title: 'Profit-focused dynamic local area network',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 268,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.9,
    //   category: 'Technology',
    //   seller_name: 'Rosabel Gavin',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 45930,
    //   auto_upload: false
    // },
    // {
    //   id: 533,
    //   title: 'Automated bandwidth-monitored approach',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 179,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.2,
    //   category: 'Toys',
    //   seller_name: 'Ginny Beetlestone',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 92224,
    //   auto_upload: false
    // },
    // {
    //   id: 534,
    //   title: 'Re-contextualized regional contingency',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 158,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.5,
    //   category: 'Food',
    //   seller_name: 'Celine Smethurst',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 23326,
    //   auto_upload: true
    // },
    // {
    //   id: 535,
    //   title: 'Networked transitional strategy',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 623,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.2,
    //   category: 'Animal',
    //   seller_name: 'Winnifred Proud',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 25174,
    //   auto_upload: false
    // },
    // {
    //   id: 536,
    //   title: 'Networked asynchronous structure',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 768,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.9,
    //   category: 'Animal',
    //   seller_name: 'Si Magnay',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 92199,
    //   auto_upload: false
    // },
    // {
    //   id: 537,
    //   title: 'Profit-focused exuding concept',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 81,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.1,
    //   category: 'Books',
    //   seller_name: 'Kalinda Kauschke',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 58561,
    //   auto_upload: false
    // },
    // {
    //   id: 538,
    //   title: 'Extended dynamic ability',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 588,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.2,
    //   category: 'Technology',
    //   seller_name: 'Lockwood Rutigliano',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 76873,
    //   auto_upload: false
    // },
    // {
    //   id: 539,
    //   title: 'Centralized 24/7 infrastructure',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 850,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.7,
    //   category: 'Animal',
    //   seller_name: 'Marcile Muirden',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 76533,
    //   auto_upload: false
    // },
    // {
    //   id: 540,
    //   title: 'Front-line didactic capacity',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 361,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.3,
    //   category: 'Beauty',
    //   seller_name: 'Darcy Issakov',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 33327,
    //   auto_upload: false
    // },
    // {
    //   id: 541,
    //   title: 'Business-focused intangible application',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 466,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.4,
    //   category: 'Superhero',
    //   seller_name: 'Alex Norcock',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 24447,
    //   auto_upload: true
    // },
    // {
    //   id: 542,
    //   title: 'Persevering transitional open system',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 848,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.4,
    //   category: 'Home Decor',
    //   seller_name: 'Kevan Umbers',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 69450,
    //   auto_upload: true
    // },
    // {
    //   id: 543,
    //   title: 'Triple-buffered upward-trending software',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 219,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.8,
    //   category: 'Home Decor',
    //   seller_name: 'Crawford Goodman',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 70844,
    //   auto_upload: true
    // },
    // {
    //   id: 544,
    //   title: 'Monitored holistic encryption',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 299,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.1,
    //   category: 'Food',
    //   seller_name: 'Prue Pitcher',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 34692,
    //   auto_upload: true
    // },
    // {
    //   id: 545,
    //   title: 'Ameliorated neutral middleware',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 247,
    //   description:
    //     'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.9,
    //   category: 'Fashion',
    //   seller_name: 'Conant Jermin',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 75378,
    //   auto_upload: true
    // },
    // {
    //   id: 546,
    //   title: 'Upgradable attitude-oriented info-mediaries',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 493,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.2,
    //   category: 'Toys',
    //   seller_name: 'Edna McSparran',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 21450,
    //   auto_upload: true
    // },
    // {
    //   id: 547,
    //   title: 'Phased multi-state hub',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 597,
    //   description:
    //     'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 4.3,
    //   category: 'Sports',
    //   seller_name: 'Coop Kimbling',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 92058,
    //   auto_upload: false
    // },
    // {
    //   id: 548,
    //   title: 'Optimized asymmetric matrix',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 694,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 5.0,
    //   category: 'Animal',
    //   seller_name: "Teodora O'Corhane",
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 96702,
    //   auto_upload: false
    // },
    // {
    //   id: 549,
    //   title: 'Down-sized interactive projection',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 849,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.6,
    //   category: 'Toys',
    //   seller_name: 'Mirilla Baskerfield',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 63421,
    //   auto_upload: false
    // },
    // {
    //   id: 550,
    //   title: 'Public-key next generation customer loyalty',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 922,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.5,
    //   category: 'Beauty',
    //   seller_name: 'Harrietta Kohter',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 53908,
    //   auto_upload: false
    // },
    // {
    //   id: 551,
    //   title: 'Object-based maximized benchmark',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 80,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.1,
    //   category: 'Beauty',
    //   seller_name: 'Hesther Galbreath',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 35719,
    //   auto_upload: false
    // },
    // {
    //   id: 552,
    //   title: 'Fully-configurable client-driven knowledge user',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 955,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.8,
    //   category: 'Beauty',
    //   seller_name: 'Stanton Garrat',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 41226,
    //   auto_upload: true
    // },
    // {
    //   id: 553,
    //   title: 'Customer-focused multi-tasking middleware',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 716,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 3.8,
    //   category: 'Animal',
    //   seller_name: 'Rriocard Pelz',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 42324,
    //   auto_upload: true
    // },
    // {
    //   id: 554,
    //   title: 'Inverse bandwidth-monitored support',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 568,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: 'Bette Dameisele',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 83857,
    //   auto_upload: true
    // },
    // {
    //   id: 555,
    //   title: 'Synergistic needs-based workforce',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 550,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 3.9,
    //   category: 'Home Decor',
    //   seller_name: 'Trudy Mathivon',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 84111,
    //   auto_upload: true
    // },
    // {
    //   id: 556,
    //   title: 'Visionary multimedia paradigm',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 485,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.8,
    //   category: 'Sports',
    //   seller_name: 'Osmund Chesterman',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 99877,
    //   auto_upload: false
    // },
    // {
    //   id: 557,
    //   title: 'Inverse multi-state complexity',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 976,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 4.3,
    //   category: 'Technology',
    //   seller_name: 'Florencia Denyagin',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 6415,
    //   auto_upload: false
    // },
    // {
    //   id: 558,
    //   title: 'Extended homogeneous task-force',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 636,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 5.0,
    //   category: 'Beauty',
    //   seller_name: 'Aluin Lowseley',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 78639,
    //   auto_upload: false
    // },
    // {
    //   id: 559,
    //   title: 'Enterprise-wide hybrid budgetary management',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 624,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.2,
    //   category: 'Fashion',
    //   seller_name: 'Giulietta Arnaudi',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 70150,
    //   auto_upload: false
    // },
    // {
    //   id: 560,
    //   title: 'Switchable logistical projection',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 712,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.3,
    //   category: 'Superhero',
    //   seller_name: 'Jerrilyn Fain',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 60424,
    //   auto_upload: false
    // },
    // {
    //   id: 561,
    //   title: 'Inverse intangible knowledge base',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 946,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 4.7,
    //   category: 'Toys',
    //   seller_name: 'Nesta Illing',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 43419,
    //   auto_upload: false
    // },
    // {
    //   id: 562,
    //   title: 'De-engineered human-resource website',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 375,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.8,
    //   category: 'Animal',
    //   seller_name: 'Robinia Pallaske',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 67555,
    //   auto_upload: true
    // },
    // {
    //   id: 563,
    //   title: 'Extended bifurcated instruction set',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 409,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 5.0,
    //   category: 'Animal',
    //   seller_name: 'Amitie Yonnie',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 72661,
    //   auto_upload: true
    // },
    // {
    //   id: 564,
    //   title: 'Realigned motivating pricing structure',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 518,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.9,
    //   category: 'Sports',
    //   seller_name: 'Hanna Cleave',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 96435,
    //   auto_upload: false
    // },
    // {
    //   id: 565,
    //   title: 'Object-based reciprocal knowledge user',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 203,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 3.7,
    //   category: 'Beauty',
    //   seller_name: 'Cecilia Kohen',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 81336,
    //   auto_upload: true
    // },
    // {
    //   id: 566,
    //   title: 'De-engineered neutral workforce',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 716,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 3.7,
    //   category: 'Fashion',
    //   seller_name: 'Winne Jodkowski',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 19517,
    //   auto_upload: true
    // },
    // {
    //   id: 567,
    //   title: 'Monitored optimizing concept',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 207,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.1,
    //   category: 'Superhero',
    //   seller_name: 'Aime Probets',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 39129,
    //   auto_upload: true
    // },
    // {
    //   id: 568,
    //   title: 'Secured actuating capability',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 386,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.3,
    //   category: 'Toys',
    //   seller_name: 'Hannis Corradino',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 33620,
    //   auto_upload: false
    // },
    // {
    //   id: 569,
    //   title: 'Multi-lateral explicit capacity',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 483,
    //   description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.2,
    //   category: 'Beauty',
    //   seller_name: 'Alan Gallegos',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 12556,
    //   auto_upload: false
    // },
    // {
    //   id: 570,
    //   title: 'Customizable uniform throughput',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 731,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.5,
    //   category: 'Sports',
    //   seller_name: 'Randolph Flanigan',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 46377,
    //   auto_upload: false
    // },
    // {
    //   id: 571,
    //   title: 'Advanced directional function',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 727,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.2,
    //   category: 'Sports',
    //   seller_name: 'Lorrin Pritty',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 51588,
    //   auto_upload: false
    // },
    // {
    //   id: 572,
    //   title: 'De-engineered 24 hour utilisation',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 756,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 4.5,
    //   category: 'Fashion',
    //   seller_name: 'Gretchen MacParland',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 56550,
    //   auto_upload: true
    // },
    // {
    //   id: 573,
    //   title: 'Compatible mission-critical data-warehouse',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 181,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.7,
    //   category: 'Sports',
    //   seller_name: 'Tansy Manners',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 29318,
    //   auto_upload: false
    // },
    // {
    //   id: 574,
    //   title: 'Diverse contextually-based application',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 349,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 4.5,
    //   category: 'Sports',
    //   seller_name: 'Aaren Allett',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 9432,
    //   auto_upload: false
    // },
    // {
    //   id: 575,
    //   title: 'Public-key zero tolerance frame',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 894,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 4.1,
    //   category: 'Toys',
    //   seller_name: 'Billy Rudolf',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 10571,
    //   auto_upload: true
    // },
    // {
    //   id: 576,
    //   title: 'Quality-focused tangible installation',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 254,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.8,
    //   category: 'Fashion',
    //   seller_name: 'Melinde Mabey',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 68977,
    //   auto_upload: false
    // },
    // {
    //   id: 577,
    //   title: 'Expanded human-resource firmware',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 342,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 3.7,
    //   category: 'Toys',
    //   seller_name: 'Parnell Kleinplatz',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 20017,
    //   auto_upload: true
    // },
    // {
    //   id: 578,
    //   title: 'Re-contextualized empowering Graphic Interface',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 590,
    //   description:
    //     'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 4.2,
    //   category: 'Sports',
    //   seller_name: 'Karalee Godfree',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 19379,
    //   auto_upload: true
    // },
    // {
    //   id: 579,
    //   title: 'Robust regional monitoring',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 175,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 3.1,
    //   category: 'Fashion',
    //   seller_name: 'Murielle Arnaudi',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 65834,
    //   auto_upload: true
    // },
    // {
    //   id: 580,
    //   title: 'Cloned regional system engine',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 677,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.7,
    //   category: 'Books',
    //   seller_name: 'Estelle Delnevo',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 86492,
    //   auto_upload: true
    // },
    // {
    //   id: 581,
    //   title: 'Future-proofed mobile task-force',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 965,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.9,
    //   category: 'Home Decor',
    //   seller_name: 'Emmett Skate',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 37953,
    //   auto_upload: false
    // },
    // {
    //   id: 582,
    //   title: 'Visionary web-enabled knowledge user',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 150,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.9,
    //   category: 'Food',
    //   seller_name: 'Agnesse Feuell',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 31042,
    //   auto_upload: false
    // },
    // {
    //   id: 583,
    //   title: 'Reactive tertiary definition',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 895,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.8,
    //   category: 'Books',
    //   seller_name: 'Jillayne Mastrantone',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 96972,
    //   auto_upload: true
    // },
    // {
    //   id: 584,
    //   title: 'Virtual next generation help-desk',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 141,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.5,
    //   category: 'Fashion',
    //   seller_name: 'Leah Mancktelow',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 43038,
    //   auto_upload: false
    // },
    // {
    //   id: 585,
    //   title: 'Compatible zero tolerance customer loyalty',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 576,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.1,
    //   category: 'Fashion',
    //   seller_name: 'Dayna Darker',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 38353,
    //   auto_upload: true
    // },
    // {
    //   id: 586,
    //   title: 'Down-sized zero defect system engine',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 91,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 3.6,
    //   category: 'Toys',
    //   seller_name: 'Juliann Bosch',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 99620,
    //   auto_upload: true
    // },
    // {
    //   id: 587,
    //   title: 'Function-based multimedia firmware',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 270,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 4.6,
    //   category: 'Animal',
    //   seller_name: 'Alexandrina Eadie',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 41178,
    //   auto_upload: true
    // },
    // {
    //   id: 588,
    //   title: 'Optimized high-level matrices',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 229,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.9,
    //   category: 'Sports',
    //   seller_name: 'Fan Suggett',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 96065,
    //   auto_upload: false
    // },
    // {
    //   id: 589,
    //   title: 'Persevering clear-thinking methodology',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 675,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.5,
    //   category: 'Superhero',
    //   seller_name: 'Biron Boshere',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 28003,
    //   auto_upload: true
    // },
    // {
    //   id: 590,
    //   title: 'Public-key discrete help-desk',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 819,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 3.4,
    //   category: 'Food',
    //   seller_name: 'Ashia Trenam',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 81380,
    //   auto_upload: true
    // },
    // {
    //   id: 591,
    //   title: 'De-engineered discrete structure',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 540,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.0,
    //   category: 'Books',
    //   seller_name: 'Pedro Banbury',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 99909,
    //   auto_upload: true
    // },
    // {
    //   id: 592,
    //   title: 'Enterprise-wide 24/7 time-frame',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 349,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 3.4,
    //   category: 'Sports',
    //   seller_name: 'Maureene Bosket',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 23112,
    //   auto_upload: true
    // },
    // {
    //   id: 593,
    //   title: 'Cross-group encompassing framework',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 643,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 3.5,
    //   category: 'Home Decor',
    //   seller_name: 'Korella Buckney',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 81861,
    //   auto_upload: true
    // },
    // {
    //   id: 594,
    //   title: 'De-engineered next generation support',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 682,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 4.2,
    //   category: 'Sports',
    //   seller_name: 'Lishe Drewe',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 9720,
    //   auto_upload: true
    // },
    // {
    //   id: 595,
    //   title: 'Customizable object-oriented utilisation',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 209,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.0,
    //   category: 'Books',
    //   seller_name: 'Faythe Pock',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 85405,
    //   auto_upload: true
    // },
    // {
    //   id: 596,
    //   title: 'Advanced heuristic groupware',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 541,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 4.0,
    //   category: 'Superhero',
    //   seller_name: 'Vicky Agg',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 34549,
    //   auto_upload: true
    // },
    // {
    //   id: 597,
    //   title: 'Digitized foreground initiative',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 965,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    //   rating: 4.4,
    //   category: 'Fashion',
    //   seller_name: 'Giselle Morstatt',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 82328,
    //   auto_upload: false
    // },
    // {
    //   id: 598,
    //   title: 'Ergonomic motivating approach',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 92,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.3,
    //   category: 'Superhero',
    //   seller_name: 'Janelle Duro',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 62209,
    //   auto_upload: false
    // },
    // {
    //   id: 599,
    //   title: 'Self-enabling optimal capacity',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 367,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.7,
    //   category: 'Superhero',
    //   seller_name: 'Lissi Runciman',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 62568,
    //   auto_upload: false
    // },
    // {
    //   id: 600,
    //   title: 'Upgradable reciprocal parallelism',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 408,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 4.3,
    //   category: 'Technology',
    //   seller_name: 'Pierrette Dungay',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 32480,
    //   auto_upload: false
    // },
    // {
    //   id: 601,
    //   title: 'Quality-focused full-range interface',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 176,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.9,
    //   category: 'Animal',
    //   seller_name: 'Desiri Jancy',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 58282,
    //   auto_upload: true
    // },
    // {
    //   id: 602,
    //   title: 'Synchronised web-enabled hierarchy',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 489,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.4,
    //   category: 'Home Decor',
    //   seller_name: 'Karlotte Bachellier',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 41042,
    //   auto_upload: false
    // },
    // {
    //   id: 603,
    //   title: 'Integrated bottom-line service-desk',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 72,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 3.8,
    //   category: 'Animal',
    //   seller_name: 'Jules Broinlich',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 51167,
    //   auto_upload: false
    // },
    // {
    //   id: 604,
    //   title: 'Open-source secondary data-warehouse',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 545,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.4,
    //   category: 'Books',
    //   seller_name: 'Noell Standage',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 97510,
    //   auto_upload: false
    // },
    // {
    //   id: 605,
    //   title: 'Exclusive cohesive monitoring',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 167,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 3.4,
    //   category: 'Food',
    //   seller_name: 'Myrtle Tarbert',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 44357,
    //   auto_upload: false
    // },
    // {
    //   id: 606,
    //   title: 'Down-sized radical encryption',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 887,
    //   description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: 'Cammy Colaton',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 6002,
    //   auto_upload: false
    // },
    // {
    //   id: 607,
    //   title: 'Advanced bi-directional Graphical User Interface',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 838,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.1,
    //   category: 'Technology',
    //   seller_name: 'Gypsy Batson',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 12419,
    //   auto_upload: true
    // },
    // {
    //   id: 608,
    //   title: 'Triple-buffered background Graphical User Interface',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 304,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.1,
    //   category: 'Animal',
    //   seller_name: 'Katine Hebbes',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 67189,
    //   auto_upload: true
    // },
    // {
    //   id: 609,
    //   title: 'Reverse-engineered 24/7 core',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 362,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 4.3,
    //   category: 'Animal',
    //   seller_name: 'Drucie Belcham',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 34768,
    //   auto_upload: false
    // },
    // {
    //   id: 610,
    //   title: 'Diverse asynchronous hierarchy',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 75,
    //   description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 3.6,
    //   category: 'Books',
    //   seller_name: 'Dorena Urch',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 43826,
    //   auto_upload: false
    // },
    // {
    //   id: 611,
    //   title: 'Realigned zero defect process improvement',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 162,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.5,
    //   category: 'Superhero',
    //   seller_name: 'Elvis Delap',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 64228,
    //   auto_upload: false
    // },
    // {
    //   id: 612,
    //   title: 'Realigned full-range framework',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 259,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.1,
    //   category: 'Food',
    //   seller_name: 'Jeremy Sandys',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 88890,
    //   auto_upload: true
    // },
    // {
    //   id: 613,
    //   title: 'Switchable value-added hub',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 157,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.1,
    //   category: 'Technology',
    //   seller_name: 'Meara Westell',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 92399,
    //   auto_upload: false
    // },
    // {
    //   id: 614,
    //   title: 'Expanded heuristic Graphic Interface',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 666,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.4,
    //   category: 'Beauty',
    //   seller_name: 'Wally Ridgeway',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 72563,
    //   auto_upload: false
    // },
    // {
    //   id: 615,
    //   title: 'Robust incremental collaboration',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 834,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.5,
    //   category: 'Beauty',
    //   seller_name: 'Prinz Bourne',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 51038,
    //   auto_upload: true
    // },
    // {
    //   id: 616,
    //   title: 'Down-sized 4th generation task-force',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 263,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 4.6,
    //   category: 'Sports',
    //   seller_name: 'Adora Durdan',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 51812,
    //   auto_upload: false
    // },
    // {
    //   id: 617,
    //   title: 'Quality-focused intermediate installation',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 890,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.1,
    //   category: 'Fashion',
    //   seller_name: 'Waring Hawe',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 77040,
    //   auto_upload: true
    // },
    // {
    //   id: 618,
    //   title: 'Self-enabling mobile infrastructure',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 267,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.1,
    //   category: 'Toys',
    //   seller_name: 'Catharina Berford',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 58179,
    //   auto_upload: true
    // },
    // {
    //   id: 619,
    //   title: 'Operative actuating task-force',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 524,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.1,
    //   category: 'Food',
    //   seller_name: 'Gualterio Chick',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 62485,
    //   auto_upload: false
    // },
    // {
    //   id: 620,
    //   title: 'Enhanced responsive implementation',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 724,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 3.9,
    //   category: 'Sports',
    //   seller_name: 'Molli Lindenberg',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 14791,
    //   auto_upload: false
    // },
    // {
    //   id: 621,
    //   title: 'Seamless cohesive workforce',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 326,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.9,
    //   category: 'Fashion',
    //   seller_name: 'Hyman Placide',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 96866,
    //   auto_upload: true
    // },
    // {
    //   id: 622,
    //   title: 'Down-sized static process improvement',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 882,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 3.5,
    //   category: 'Toys',
    //   seller_name: 'Tadio Hearsum',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 18015,
    //   auto_upload: true
    // },
    // {
    //   id: 623,
    //   title: 'Horizontal fresh-thinking project',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 958,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.6,
    //   category: 'Books',
    //   seller_name: 'Sandi Edelman',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 37435,
    //   auto_upload: false
    // },
    // {
    //   id: 624,
    //   title: 'Configurable full-range help-desk',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 487,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.2,
    //   category: 'Food',
    //   seller_name: 'Theo Narducci',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 90566,
    //   auto_upload: false
    // },
    // {
    //   id: 625,
    //   title: 'Multi-lateral asynchronous encoding',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 441,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.6,
    //   category: 'Food',
    //   seller_name: 'Ricki Merner',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 33106,
    //   auto_upload: true
    // },
    // {
    //   id: 626,
    //   title: 'Multi-layered secondary emulation',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 551,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 4.7,
    //   category: 'Books',
    //   seller_name: 'Mechelle Lorman',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 6427,
    //   auto_upload: true
    // },
    // {
    //   id: 627,
    //   title: 'De-engineered well-modulated open architecture',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 780,
    //   description:
    //     'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 3.9,
    //   category: 'Sports',
    //   seller_name: 'Chrissy Angel',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 65985,
    //   auto_upload: false
    // },
    // {
    //   id: 628,
    //   title: 'Distributed multi-tasking complexity',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 834,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: 'Dunstan Rushbrook',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 41356,
    //   auto_upload: false
    // },
    // {
    //   id: 629,
    //   title: 'Down-sized uniform frame',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 227,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 3.1,
    //   category: 'Fashion',
    //   seller_name: 'Conant Freckelton',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 79536,
    //   auto_upload: true
    // },
    // {
    //   id: 630,
    //   title: 'Up-sized secondary moratorium',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 119,
    //   description:
    //     'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 4.9,
    //   category: 'Books',
    //   seller_name: 'Amerigo Roughsedge',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 77384,
    //   auto_upload: false
    // },
    // {
    //   id: 631,
    //   title: 'Profound radical methodology',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 748,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.4,
    //   category: 'Sports',
    //   seller_name: 'Martita Groves',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 99492,
    //   auto_upload: true
    // },
    // {
    //   id: 632,
    //   title: 'Assimilated secondary synergy',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 807,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.8,
    //   category: 'Toys',
    //   seller_name: 'Fay Giggie',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 32755,
    //   auto_upload: false
    // },
    // {
    //   id: 633,
    //   title: 'Reactive object-oriented projection',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 117,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 3.5,
    //   category: 'Fashion',
    //   seller_name: 'Bob Kennsley',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 91610,
    //   auto_upload: true
    // },
    // {
    //   id: 634,
    //   title: 'Robust bifurcated secured line',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 180,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.4,
    //   category: 'Food',
    //   seller_name: 'Phylys Sighard',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 39803,
    //   auto_upload: false
    // },
    // {
    //   id: 635,
    //   title: 'Grass-roots local website',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 101,
    //   description:
    //     'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.7,
    //   category: 'Food',
    //   seller_name: 'Jami Ofener',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 61496,
    //   auto_upload: true
    // },
    // {
    //   id: 636,
    //   title: 'Synchronised optimizing portal',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 568,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.5,
    //   category: 'Home Decor',
    //   seller_name: 'Verena Mitchenson',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 56844,
    //   auto_upload: true
    // },
    // {
    //   id: 637,
    //   title: 'Multi-layered actuating circuit',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 149,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 3.6,
    //   category: 'Sports',
    //   seller_name: 'Fayre Sells',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 48975,
    //   auto_upload: true
    // },
    // {
    //   id: 638,
    //   title: 'Innovative contextually-based throughput',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 867,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.3,
    //   category: 'Animal',
    //   seller_name: 'Powell Stidever',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 63809,
    //   auto_upload: true
    // },
    // {
    //   id: 639,
    //   title: 'Triple-buffered eco-centric solution',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 669,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.7,
    //   category: 'Fashion',
    //   seller_name: 'Agace Heathcoat',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 70698,
    //   auto_upload: false
    // },
    // {
    //   id: 640,
    //   title: 'Cross-platform optimizing capability',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 130,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 4.1,
    //   category: 'Animal',
    //   seller_name: 'Berri Flieger',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 34435,
    //   auto_upload: true
    // },
    // {
    //   id: 641,
    //   title: 'Adaptive static artificial intelligence',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 833,
    //   description:
    //     'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 4.4,
    //   category: 'Home Decor',
    //   seller_name: 'Desdemona Howlett',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 43072,
    //   auto_upload: false
    // },
    // {
    //   id: 642,
    //   title: 'Balanced scalable artificial intelligence',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 805,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.9,
    //   category: 'Home Decor',
    //   seller_name: 'Padraig Trendle',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 48575,
    //   auto_upload: false
    // },
    // {
    //   id: 643,
    //   title: 'Organized bandwidth-monitored superstructure',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 736,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.9,
    //   category: 'Beauty',
    //   seller_name: 'Mellicent Cuckoo',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 62625,
    //   auto_upload: true
    // },
    // {
    //   id: 644,
    //   title: 'Cross-platform stable encryption',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 508,
    //   description:
    //     'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 3.3,
    //   category: 'Food',
    //   seller_name: 'Dulcinea Buddington',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 47817,
    //   auto_upload: true
    // },
    // {
    //   id: 645,
    //   title: 'Centralized methodical Graphic Interface',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 571,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.3,
    //   category: 'Sports',
    //   seller_name: 'Berte Talkington',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 82884,
    //   auto_upload: true
    // },
    // {
    //   id: 646,
    //   title: 'Future-proofed system-worthy function',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 805,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.6,
    //   category: 'Fashion',
    //   seller_name: 'Hernando Sandhill',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 42393,
    //   auto_upload: true
    // },
    // {
    //   id: 647,
    //   title: 'Business-focused uniform parallelism',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 458,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 3.8,
    //   category: 'Superhero',
    //   seller_name: 'Cayla Greguol',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 29545,
    //   auto_upload: true
    // },
    // {
    //   id: 648,
    //   title: 'Distributed content-based collaboration',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 221,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.7,
    //   category: 'Toys',
    //   seller_name: 'Guss Martijn',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 57376,
    //   auto_upload: false
    // },
    // {
    //   id: 649,
    //   title: 'Distributed logistical encryption',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 287,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.0,
    //   category: 'Toys',
    //   seller_name: 'Hamlen Lailey',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 33878,
    //   auto_upload: true
    // },
    // {
    //   id: 650,
    //   title: 'Polarised attitude-oriented adapter',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 193,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.1,
    //   category: 'Home Decor',
    //   seller_name: 'Vivyanne Scully',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 96227,
    //   auto_upload: false
    // },
    // {
    //   id: 651,
    //   title: 'Optional mobile architecture',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 959,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: 'Ricardo De Bellis',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 96481,
    //   auto_upload: false
    // },
    // {
    //   id: 652,
    //   title: 'Assimilated cohesive moratorium',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 654,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.1,
    //   category: 'Superhero',
    //   seller_name: 'Mickie Dewis',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 84009,
    //   auto_upload: false
    // },
    // {
    //   id: 653,
    //   title: 'Ameliorated global task-force',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 798,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.4,
    //   category: 'Home Decor',
    //   seller_name: 'Clayborne Laminman',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 6506,
    //   auto_upload: true
    // },
    // {
    //   id: 654,
    //   title: 'User-friendly next generation portal',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 999,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 3.1,
    //   category: 'Fashion',
    //   seller_name: 'Dona Trahar',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 47569,
    //   auto_upload: true
    // },
    // {
    //   id: 655,
    //   title: 'Enhanced homogeneous complexity',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 183,
    //   description:
    //     'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 4.3,
    //   category: 'Superhero',
    //   seller_name: 'Moselle Ollcott',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 52310,
    //   auto_upload: true
    // },
    // {
    //   id: 656,
    //   title: 'Re-contextualized modular attitude',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 72,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 5.0,
    //   category: 'Sports',
    //   seller_name: 'Lula McGowing',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 86537,
    //   auto_upload: false
    // },
    // {
    //   id: 657,
    //   title: 'Mandatory upward-trending middleware',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 745,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 3.9,
    //   category: 'Books',
    //   seller_name: 'Maryjane Dack',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 69329,
    //   auto_upload: false
    // },
    // {
    //   id: 658,
    //   title: 'Devolved national budgetary management',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 871,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.0,
    //   category: 'Beauty',
    //   seller_name: 'Haywood Finlator',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 99914,
    //   auto_upload: true
    // },
    // {
    //   id: 659,
    //   title: 'Cross-group 5th generation circuit',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 346,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.5,
    //   category: 'Beauty',
    //   seller_name: 'Rollins Stevens',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 50273,
    //   auto_upload: false
    // },
    // {
    //   id: 660,
    //   title: 'Reverse-engineered client-driven monitoring',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 565,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.4,
    //   category: 'Technology',
    //   seller_name: 'Paten Scay',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 28093,
    //   auto_upload: false
    // },
    // {
    //   id: 661,
    //   title: 'Enhanced systematic data-warehouse',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 75,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.5,
    //   category: 'Fashion',
    //   seller_name: 'Theo Marzele',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 67095,
    //   auto_upload: true
    // },
    // {
    //   id: 662,
    //   title: 'Phased tertiary strategy',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 134,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.9,
    //   category: 'Sports',
    //   seller_name: 'Bengt Dower',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 23499,
    //   auto_upload: false
    // },
    // {
    //   id: 663,
    //   title: 'Balanced multi-state help-desk',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 805,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.5,
    //   category: 'Superhero',
    //   seller_name: 'Elfrieda Capin',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 48071,
    //   auto_upload: true
    // },
    // {
    //   id: 664,
    //   title: 'De-engineered transitional alliance',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 920,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.6,
    //   category: 'Sports',
    //   seller_name: 'Garreth Mcwhinney',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 79069,
    //   auto_upload: false
    // },
    // {
    //   id: 665,
    //   title: 'Enhanced homogeneous benchmark',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 940,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.8,
    //   category: 'Animal',
    //   seller_name: 'Allistir Yearne',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 90212,
    //   auto_upload: true
    // },
    // {
    //   id: 666,
    //   title: 'Organized intermediate contingency',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 345,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.0,
    //   category: 'Books',
    //   seller_name: 'Jane Rulton',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 32915,
    //   auto_upload: false
    // },
    // {
    //   id: 667,
    //   title: 'Centralized 24 hour middleware',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 995,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 4.0,
    //   category: 'Toys',
    //   seller_name: 'Reagen Butchers',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 89747,
    //   auto_upload: true
    // },
    // {
    //   id: 668,
    //   title: 'Automated needs-based implementation',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 791,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 3.3,
    //   category: 'Books',
    //   seller_name: 'Dorena Suff',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 89343,
    //   auto_upload: false
    // },
    // {
    //   id: 669,
    //   title: 'Mandatory solution-oriented core',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 859,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 4.3,
    //   category: 'Toys',
    //   seller_name: 'Aldridge Blakes',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 9619,
    //   auto_upload: true
    // },
    // {
    //   id: 670,
    //   title: 'Adaptive zero tolerance workforce',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 767,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.2,
    //   category: 'Toys',
    //   seller_name: 'Kipp Maulkin',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 92576,
    //   auto_upload: true
    // },
    // {
    //   id: 671,
    //   title: 'Implemented well-modulated Graphic Interface',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 272,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 3.6,
    //   category: 'Sports',
    //   seller_name: 'Aluin Everall',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 42343,
    //   auto_upload: true
    // },
    // {
    //   id: 672,
    //   title: 'Mandatory scalable leverage',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 436,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 4.2,
    //   category: 'Books',
    //   seller_name: 'Jdavie Anster',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 92964,
    //   auto_upload: true
    // },
    // {
    //   id: 673,
    //   title: 'Cloned 3rd generation database',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 676,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.6,
    //   category: 'Sports',
    //   seller_name: 'Othelia Satchel',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 50103,
    //   auto_upload: false
    // },
    // {
    //   id: 674,
    //   title: 'Customizable systemic time-frame',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 82,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 5.0,
    //   category: 'Superhero',
    //   seller_name: 'Arlene Fagg',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 64558,
    //   auto_upload: true
    // },
    // {
    //   id: 675,
    //   title: 'Face to face next generation policy',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 873,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 4.0,
    //   category: 'Sports',
    //   seller_name: 'Vern Kittiman',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 16109,
    //   auto_upload: true
    // },
    // {
    //   id: 676,
    //   title: 'Progressive even-keeled matrices',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 716,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.3,
    //   category: 'Sports',
    //   seller_name: 'Urbain Wapplington',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 57777,
    //   auto_upload: true
    // },
    // {
    //   id: 677,
    //   title: 'Multi-lateral system-worthy application',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 800,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.2,
    //   category: 'Beauty',
    //   seller_name: 'Jens Osment',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 19214,
    //   auto_upload: false
    // },
    // {
    //   id: 678,
    //   title: 'Synergistic composite concept',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 85,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.7,
    //   category: 'Toys',
    //   seller_name: 'Aluino Farrar',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 94115,
    //   auto_upload: false
    // },
    // {
    //   id: 679,
    //   title: 'Vision-oriented systematic throughput',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 978,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.1,
    //   category: 'Books',
    //   seller_name: 'Fredrika Sommerlin',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 72805,
    //   auto_upload: false
    // },
    // {
    //   id: 680,
    //   title: 'Upgradable regional artificial intelligence',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 486,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.2,
    //   category: 'Technology',
    //   seller_name: 'Alethea Nozzolinii',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 77355,
    //   auto_upload: true
    // },
    // {
    //   id: 681,
    //   title: 'Business-focused actuating model',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 993,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.5,
    //   category: 'Fashion',
    //   seller_name: 'Palmer Ragot',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 98468,
    //   auto_upload: false
    // },
    // {
    //   id: 682,
    //   title: 'Operative clear-thinking support',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 534,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 4.7,
    //   category: 'Sports',
    //   seller_name: 'Cary Goodreid',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 46871,
    //   auto_upload: false
    // },
    // {
    //   id: 683,
    //   title: 'Advanced bi-directional attitude',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 396,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 5.0,
    //   category: 'Superhero',
    //   seller_name: 'Dara Breslin',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 13932,
    //   auto_upload: false
    // },
    // {
    //   id: 684,
    //   title: 'Secured leading edge strategy',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 405,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.5,
    //   category: 'Animal',
    //   seller_name: 'Gabey Staddart',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 62925,
    //   auto_upload: false
    // },
    // {
    //   id: 685,
    //   title: 'User-friendly 4th generation forecast',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 956,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.2,
    //   category: 'Animal',
    //   seller_name: 'Terra Armistead',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 87404,
    //   auto_upload: false
    // },
    // {
    //   id: 686,
    //   title: 'Organic optimizing customer loyalty',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 56,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 3.4,
    //   category: 'Sports',
    //   seller_name: 'Carlen Spurden',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 87915,
    //   auto_upload: true
    // },
    // {
    //   id: 687,
    //   title: 'Cross-group zero tolerance time-frame',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 326,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.1,
    //   category: 'Home Decor',
    //   seller_name: 'Gigi Cogdon',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 31300,
    //   auto_upload: true
    // },
    // {
    //   id: 688,
    //   title: 'Seamless multimedia focus group',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 118,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 4.6,
    //   category: 'Fashion',
    //   seller_name: 'Tedd Stalley',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 36101,
    //   auto_upload: true
    // },
    // {
    //   id: 689,
    //   title: 'Innovative asymmetric open system',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 876,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.6,
    //   category: 'Food',
    //   seller_name: 'Ronnica Dutnell',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 25724,
    //   auto_upload: false
    // },
    // {
    //   id: 690,
    //   title: 'Profit-focused 6th generation moderator',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 179,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.4,
    //   category: 'Beauty',
    //   seller_name: 'Eustace Comelli',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 73734,
    //   auto_upload: false
    // },
    // {
    //   id: 691,
    //   title: 'Programmable discrete flexibility',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 394,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 3.6,
    //   category: 'Home Decor',
    //   seller_name: 'Myrtice Dagworthy',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 33500,
    //   auto_upload: false
    // },
    // {
    //   id: 692,
    //   title: 'User-friendly dynamic approach',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 71,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.2,
    //   category: 'Home Decor',
    //   seller_name: 'Skipper Maraga',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 98291,
    //   auto_upload: true
    // },
    // {
    //   id: 693,
    //   title: 'Diverse dynamic encryption',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 362,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.6,
    //   category: 'Fashion',
    //   seller_name: 'Jade Bramsom',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 62595,
    //   auto_upload: true
    // },
    // {
    //   id: 694,
    //   title: 'Open-architected disintermediate strategy',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 945,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.4,
    //   category: 'Beauty',
    //   seller_name: 'Olympe Biggam',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 73849,
    //   auto_upload: true
    // },
    // {
    //   id: 695,
    //   title: 'Reduced encompassing infrastructure',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 286,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.4,
    //   category: 'Technology',
    //   seller_name: 'Romola Keating',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 10079,
    //   auto_upload: false
    // },
    // {
    //   id: 696,
    //   title: 'Digitized eco-centric open architecture',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 982,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.7,
    //   category: 'Sports',
    //   seller_name: 'Elena Brothers',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 67518,
    //   auto_upload: false
    // },
    // {
    //   id: 697,
    //   title: 'Ameliorated transitional knowledge base',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 918,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.6,
    //   category: 'Toys',
    //   seller_name: 'Danice Douse',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 24952,
    //   auto_upload: true
    // },
    // {
    //   id: 698,
    //   title: 'Switchable logistical standardization',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 900,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 4.3,
    //   category: 'Sports',
    //   seller_name: 'Guillema Itzakovitz',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 66317,
    //   auto_upload: true
    // },
    // {
    //   id: 699,
    //   title: 'User-friendly multi-state frame',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 751,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.8,
    //   category: 'Animal',
    //   seller_name: 'Mathilda Brothwell',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 52833,
    //   auto_upload: false
    // },
    // {
    //   id: 700,
    //   title: 'Exclusive national secured line',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 432,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.0,
    //   category: 'Beauty',
    //   seller_name: 'Gaby Maxworthy',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 58257,
    //   auto_upload: false
    // },
    // {
    //   id: 701,
    //   title: 'Grass-roots asymmetric knowledge user',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 174,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 3.2,
    //   category: 'Animal',
    //   seller_name: 'Annabal Fladgate',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 71590,
    //   auto_upload: false
    // },
    // {
    //   id: 702,
    //   title: 'Pre-emptive next generation strategy',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 423,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 4.0,
    //   category: 'Animal',
    //   seller_name: 'Nikolaus Strangman',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 37297,
    //   auto_upload: true
    // },
    // {
    //   id: 703,
    //   title: 'Business-focused optimal service-desk',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 555,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 3.1,
    //   category: 'Food',
    //   seller_name: 'Sabina Aguirrezabal',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 98275,
    //   auto_upload: false
    // },
    // {
    //   id: 704,
    //   title: 'Self-enabling zero administration system engine',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 740,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 4.8,
    //   category: 'Technology',
    //   seller_name: 'Mattheus Sargerson',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 16251,
    //   auto_upload: false
    // },
    // {
    //   id: 705,
    //   title: 'Team-oriented web-enabled concept',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 563,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 5.0,
    //   category: 'Books',
    //   seller_name: 'Sherrie Hughes',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 17760,
    //   auto_upload: true
    // },
    // {
    //   id: 706,
    //   title: 'Persevering asynchronous frame',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 909,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.6,
    //   category: 'Toys',
    //   seller_name: 'Cyndie Coveney',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 69478,
    //   auto_upload: true
    // },
    // {
    //   id: 707,
    //   title: 'Progressive high-level hardware',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 922,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.2,
    //   category: 'Sports',
    //   seller_name: "Vern O'Carrol",
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 81124,
    //   auto_upload: true
    // },
    // {
    //   id: 708,
    //   title: 'Monitored modular infrastructure',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 587,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 5.0,
    //   category: 'Books',
    //   seller_name: 'Cos De Fries',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 24829,
    //   auto_upload: false
    // },
    // {
    //   id: 709,
    //   title: 'User-friendly tangible hierarchy',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 610,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.1,
    //   category: 'Animal',
    //   seller_name: 'Robena Clive',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 72125,
    //   auto_upload: false
    // },
    // {
    //   id: 710,
    //   title: 'Devolved logistical task-force',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 274,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 3.9,
    //   category: 'Home Decor',
    //   seller_name: 'Tandie Korlat',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 71386,
    //   auto_upload: false
    // },
    // {
    //   id: 711,
    //   title: 'Upgradable heuristic firmware',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 264,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 4.9,
    //   category: 'Sports',
    //   seller_name: 'Leandra Perkins',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 19929,
    //   auto_upload: false
    // },
    // {
    //   id: 712,
    //   title: 'Cross-group regional ability',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 793,
    //   description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 4.1,
    //   category: 'Sports',
    //   seller_name: 'Duff Barr',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 59438,
    //   auto_upload: true
    // },
    // {
    //   id: 713,
    //   title: 'Public-key disintermediate neural-net',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 160,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.2,
    //   category: 'Toys',
    //   seller_name: 'Serena Bichard',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 33218,
    //   auto_upload: false
    // },
    // {
    //   id: 714,
    //   title: 'Cloned fault-tolerant installation',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 775,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 4.6,
    //   category: 'Toys',
    //   seller_name: 'Rosene Rousel',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 95553,
    //   auto_upload: true
    // },
    // {
    //   id: 715,
    //   title: 'Upgradable national local area network',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 825,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.9,
    //   category: 'Animal',
    //   seller_name: 'Dar Robjant',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 54513,
    //   auto_upload: true
    // },
    // {
    //   id: 716,
    //   title: 'Right-sized value-added implementation',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 824,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: "Marena D'Elia",
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 73307,
    //   auto_upload: true
    // },
    // {
    //   id: 717,
    //   title: 'Mandatory hybrid hierarchy',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 835,
    //   description:
    //     'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 4.8,
    //   category: 'Toys',
    //   seller_name: 'Nariko De Avenell',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 43395,
    //   auto_upload: true
    // },
    // {
    //   id: 718,
    //   title: 'Universal tertiary infrastructure',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 708,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 3.6,
    //   category: 'Beauty',
    //   seller_name: 'Sharlene Kelcey',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 28357,
    //   auto_upload: true
    // },
    // {
    //   id: 719,
    //   title: 'Distributed mission-critical complexity',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 516,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.5,
    //   category: 'Home Decor',
    //   seller_name: 'Deanne Chevins',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 66300,
    //   auto_upload: true
    // },
    // {
    //   id: 720,
    //   title: 'Centralized systematic policy',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 968,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.8,
    //   category: 'Fashion',
    //   seller_name: 'Brock MacIlhargy',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 89535,
    //   auto_upload: true
    // },
    // {
    //   id: 721,
    //   title: 'Re-contextualized bi-directional contingency',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 526,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.6,
    //   category: 'Superhero',
    //   seller_name: 'Tessy Iacovolo',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 70438,
    //   auto_upload: true
    // },
    // {
    //   id: 722,
    //   title: 'Down-sized upward-trending workforce',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 624,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.0,
    //   category: 'Superhero',
    //   seller_name: 'Bryna Duesberry',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 32680,
    //   auto_upload: false
    // },
    // {
    //   id: 723,
    //   title: 'Configurable mission-critical capacity',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 377,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 4.9,
    //   category: 'Food',
    //   seller_name: 'Devan Kermeen',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 7826,
    //   auto_upload: true
    // },
    // {
    //   id: 724,
    //   title: 'Configurable executive infrastructure',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 789,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 3.4,
    //   category: 'Technology',
    //   seller_name: 'Kial Wheelband',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 19525,
    //   auto_upload: false
    // },
    // {
    //   id: 725,
    //   title: 'Automated asynchronous product',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 544,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.8,
    //   category: 'Superhero',
    //   seller_name: 'Yoshiko McInnerny',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 18732,
    //   auto_upload: true
    // },
    // {
    //   id: 726,
    //   title: 'Down-sized eco-centric extranet',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 115,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.2,
    //   category: 'Animal',
    //   seller_name: 'Trever Scheffler',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 97856,
    //   auto_upload: false
    // },
    // {
    //   id: 727,
    //   title: 'Triple-buffered multimedia secured line',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 972,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.1,
    //   category: 'Home Decor',
    //   seller_name: 'Jasmin Gabrieli',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 95479,
    //   auto_upload: false
    // },
    // {
    //   id: 728,
    //   title: 'Reduced even-keeled application',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 273,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.6,
    //   category: 'Fashion',
    //   seller_name: 'Katie Blewett',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 63490,
    //   auto_upload: true
    // },
    // {
    //   id: 729,
    //   title: 'Re-engineered responsive database',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 169,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.2,
    //   category: 'Toys',
    //   seller_name: 'Shannon Janata',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 60021,
    //   auto_upload: false
    // },
    // {
    //   id: 730,
    //   title: 'Future-proofed static parallelism',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 711,
    //   description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.1,
    //   category: 'Sports',
    //   seller_name: 'Reggy Fitt',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 70212,
    //   auto_upload: false
    // },
    // {
    //   id: 731,
    //   title: 'Organic even-keeled middleware',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 294,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Worthy Blackaller',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 12914,
    //   auto_upload: false
    // },
    // {
    //   id: 732,
    //   title: 'Universal high-level synergy',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 671,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 3.8,
    //   category: 'Food',
    //   seller_name: 'Lilith Rushbrooke',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 58921,
    //   auto_upload: false
    // },
    // {
    //   id: 733,
    //   title: 'Expanded optimal core',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 228,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 4.5,
    //   category: 'Toys',
    //   seller_name: 'Cheryl Stutard',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 75815,
    //   auto_upload: true
    // },
    // {
    //   id: 734,
    //   title: 'Grass-roots multimedia attitude',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 615,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 4.8,
    //   category: 'Sports',
    //   seller_name: 'Moyra Tollett',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 49115,
    //   auto_upload: false
    // },
    // {
    //   id: 735,
    //   title: 'Universal content-based initiative',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 95,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 4.1,
    //   category: 'Animal',
    //   seller_name: 'Kip Bortolussi',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 43505,
    //   auto_upload: false
    // },
    // {
    //   id: 736,
    //   title: 'Open-architected client-server encoding',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 721,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 3.6,
    //   category: 'Animal',
    //   seller_name: 'Glynda McDiarmid',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 44477,
    //   auto_upload: true
    // },
    // {
    //   id: 737,
    //   title: 'Quality-focused asynchronous synergy',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 810,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.8,
    //   category: 'Sports',
    //   seller_name: 'Kare Allden',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 71752,
    //   auto_upload: true
    // },
    // {
    //   id: 738,
    //   title: 'Assimilated zero defect throughput',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 483,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 3.5,
    //   category: 'Fashion',
    //   seller_name: 'Glad Luxon',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 24124,
    //   auto_upload: false
    // },
    // {
    //   id: 739,
    //   title: 'Customizable real-time firmware',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 188,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 3.6,
    //   category: 'Food',
    //   seller_name: 'Delbert Bingley',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 45327,
    //   auto_upload: true
    // },
    // {
    //   id: 740,
    //   title: 'Open-source bi-directional support',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 219,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 4.0,
    //   category: 'Fashion',
    //   seller_name: 'Rena Gaskell',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 73254,
    //   auto_upload: false
    // },
    // {
    //   id: 741,
    //   title: 'Digitized value-added matrices',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 660,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.7,
    //   category: 'Superhero',
    //   seller_name: 'Hatti Pinnick',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 93511,
    //   auto_upload: true
    // },
    // {
    //   id: 742,
    //   title: 'Digitized fresh-thinking policy',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 237,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.9,
    //   category: 'Sports',
    //   seller_name: 'Brandie Fere',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 10702,
    //   auto_upload: false
    // },
    // {
    //   id: 743,
    //   title: 'Decentralized 24/7 software',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 536,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.4,
    //   category: 'Books',
    //   seller_name: 'Pren Gold',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 26681,
    //   auto_upload: true
    // },
    // {
    //   id: 744,
    //   title: 'Programmable encompassing alliance',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 957,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 5.0,
    //   category: 'Animal',
    //   seller_name: 'Noelani Presnail',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 53112,
    //   auto_upload: true
    // },
    // {
    //   id: 745,
    //   title: 'Distributed encompassing paradigm',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 868,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.3,
    //   category: 'Home Decor',
    //   seller_name: 'Arielle Ewbank',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 92307,
    //   auto_upload: true
    // },
    // {
    //   id: 746,
    //   title: 'Centralized dedicated local area network',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 662,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.1,
    //   category: 'Sports',
    //   seller_name: 'Tiebout McGreary',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 45359,
    //   auto_upload: true
    // },
    // {
    //   id: 747,
    //   title: 'Devolved human-resource structure',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 895,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.7,
    //   category: 'Toys',
    //   seller_name: 'Flossi Pendrigh',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 50548,
    //   auto_upload: false
    // },
    // {
    //   id: 748,
    //   title: 'Networked attitude-oriented monitoring',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 759,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.8,
    //   category: 'Technology',
    //   seller_name: 'Bernardine Basley',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 67340,
    //   auto_upload: false
    // },
    // {
    //   id: 749,
    //   title: 'Advanced multi-tasking software',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 736,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.8,
    //   category: 'Food',
    //   seller_name: 'Ferdie Joye',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 63754,
    //   auto_upload: false
    // },
    // {
    //   id: 750,
    //   title: 'Persevering coherent orchestration',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 78,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.9,
    //   category: 'Food',
    //   seller_name: 'Lenna Casserly',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 75271,
    //   auto_upload: false
    // },
    // {
    //   id: 751,
    //   title: 'Balanced zero tolerance interface',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 69,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 5.0,
    //   category: 'Books',
    //   seller_name: 'Donnie Aherne',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 28356,
    //   auto_upload: false
    // },
    // {
    //   id: 752,
    //   title: 'Persevering real-time hub',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 144,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.2,
    //   category: 'Technology',
    //   seller_name: 'Indira Mattiazzo',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 90348,
    //   auto_upload: true
    // },
    // {
    //   id: 753,
    //   title: 'Streamlined solution-oriented structure',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 320,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.3,
    //   category: 'Beauty',
    //   seller_name: 'Eolanda Spick',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 64338,
    //   auto_upload: true
    // },
    // {
    //   id: 754,
    //   title: 'Polarised systemic initiative',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 474,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.2,
    //   category: 'Beauty',
    //   seller_name: 'Idalia Verdun',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 56300,
    //   auto_upload: false
    // },
    // {
    //   id: 755,
    //   title: 'Fundamental static data-warehouse',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 472,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.3,
    //   category: 'Animal',
    //   seller_name: 'Dede Domokos',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 21440,
    //   auto_upload: false
    // },
    // {
    //   id: 756,
    //   title: 'Re-engineered bottom-line website',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 477,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.0,
    //   category: 'Home Decor',
    //   seller_name: 'Nichole Stealy',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 56261,
    //   auto_upload: true
    // },
    // {
    //   id: 757,
    //   title: 'Fully-configurable real-time middleware',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 900,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.2,
    //   category: 'Fashion',
    //   seller_name: 'Karlis Gillian',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 12981,
    //   auto_upload: false
    // },
    // {
    //   id: 758,
    //   title: 'Streamlined 24 hour utilisation',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 62,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.8,
    //   category: 'Home Decor',
    //   seller_name: 'Doralin Bampfield',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 62247,
    //   auto_upload: false
    // },
    // {
    //   id: 759,
    //   title: 'Re-engineered even-keeled circuit',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 361,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.8,
    //   category: 'Fashion',
    //   seller_name: 'Reinhard Parades',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 51749,
    //   auto_upload: true
    // },
    // {
    //   id: 760,
    //   title: 'Proactive stable encoding',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 551,
    //   description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 3.0,
    //   category: 'Beauty',
    //   seller_name: 'Lisha Jerzak',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 73866,
    //   auto_upload: false
    // },
    // {
    //   id: 761,
    //   title: 'Focused actuating moderator',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 191,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 4.7,
    //   category: 'Animal',
    //   seller_name: 'Ewart Wiffler',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 15316,
    //   auto_upload: true
    // },
    // {
    //   id: 762,
    //   title: 'Re-engineered foreground Graphic Interface',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 901,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 4.9,
    //   category: 'Fashion',
    //   seller_name: 'Shem Cheeseman',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 72327,
    //   auto_upload: false
    // },
    // {
    //   id: 763,
    //   title: 'Multi-layered eco-centric open architecture',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 305,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 3.1,
    //   category: 'Toys',
    //   seller_name: 'Shermie Rodriguez',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 63064,
    //   auto_upload: false
    // },
    // {
    //   id: 764,
    //   title: 'Customizable systematic structure',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 270,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.3,
    //   category: 'Technology',
    //   seller_name: 'Scot Curness',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 99956,
    //   auto_upload: true
    // },
    // {
    //   id: 765,
    //   title: 'Multi-lateral multimedia software',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 618,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.6,
    //   category: 'Superhero',
    //   seller_name: 'Elsbeth Dax',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 95211,
    //   auto_upload: true
    // },
    // {
    //   id: 766,
    //   title: 'Implemented dedicated adapter',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 303,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 3.0,
    //   category: 'Sports',
    //   seller_name: 'Tammy Mottley',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 13602,
    //   auto_upload: true
    // },
    // {
    //   id: 767,
    //   title: 'Operative incremental analyzer',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 986,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 3.5,
    //   category: 'Beauty',
    //   seller_name: 'Maurie Meagher',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 7930,
    //   auto_upload: false
    // },
    // {
    //   id: 768,
    //   title: 'Cloned eco-centric productivity',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 843,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 3.3,
    //   category: 'Superhero',
    //   seller_name: 'Shepherd Corbet',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 8415,
    //   auto_upload: true
    // },
    // {
    //   id: 769,
    //   title: 'Team-oriented incremental forecast',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 815,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.8,
    //   category: 'Home Decor',
    //   seller_name: 'Wandie Brussell',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 92344,
    //   auto_upload: false
    // },
    // {
    //   id: 770,
    //   title: 'Down-sized optimizing pricing structure',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 813,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 3.1,
    //   category: 'Animal',
    //   seller_name: 'Karolina Lerohan',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 50379,
    //   auto_upload: false
    // },
    // {
    //   id: 771,
    //   title: 'Object-based non-volatile core',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 975,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.1,
    //   category: 'Food',
    //   seller_name: 'Daffie Boards',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 94587,
    //   auto_upload: true
    // },
    // {
    //   id: 772,
    //   title: 'Balanced impactful migration',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 156,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 5.0,
    //   category: 'Sports',
    //   seller_name: 'Julieta Spellicy',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 39555,
    //   auto_upload: false
    // },
    // {
    //   id: 773,
    //   title: 'Multi-tiered global leverage',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 90,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.2,
    //   category: 'Fashion',
    //   seller_name: 'Georgie De Cruz',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 51809,
    //   auto_upload: false
    // },
    // {
    //   id: 774,
    //   title: 'Mandatory methodical definition',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 557,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.4,
    //   category: 'Sports',
    //   seller_name: 'Marci Akhurst',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 19002,
    //   auto_upload: true
    // },
    // {
    //   id: 775,
    //   title: 'User-centric bottom-line initiative',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 806,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.6,
    //   category: 'Food',
    //   seller_name: 'Yanaton Ubsdale',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 12997,
    //   auto_upload: false
    // },
    // {
    //   id: 776,
    //   title: 'Synchronised local flexibility',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 813,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 3.8,
    //   category: 'Superhero',
    //   seller_name: 'Torre Gussin',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 93990,
    //   auto_upload: true
    // },
    // {
    //   id: 777,
    //   title: 'Streamlined non-volatile Graphical User Interface',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 765,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.9,
    //   category: 'Technology',
    //   seller_name: 'Patti Spires',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 11698,
    //   auto_upload: true
    // },
    // {
    //   id: 778,
    //   title: 'Optional zero defect concept',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 427,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.8,
    //   category: 'Technology',
    //   seller_name: 'Jocelyne Pollington',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 66295,
    //   auto_upload: false
    // },
    // {
    //   id: 779,
    //   title: 'Phased composite internet solution',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 258,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 4.2,
    //   category: 'Beauty',
    //   seller_name: 'Fawne Bunyard',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 46798,
    //   auto_upload: true
    // },
    // {
    //   id: 780,
    //   title: 'Networked didactic monitoring',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 438,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 4.1,
    //   category: 'Fashion',
    //   seller_name: 'Ardith Waterstone',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 48930,
    //   auto_upload: false
    // },
    // {
    //   id: 781,
    //   title: 'User-friendly needs-based encoding',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 949,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 4.0,
    //   category: 'Beauty',
    //   seller_name: 'Guthrey Kingzet',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 70755,
    //   auto_upload: true
    // },
    // {
    //   id: 782,
    //   title: 'Optimized stable support',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 988,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 4.0,
    //   category: 'Beauty',
    //   seller_name: 'Tanitansy Pink',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 20736,
    //   auto_upload: true
    // },
    // {
    //   id: 783,
    //   title: 'Implemented empowering extranet',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 504,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.4,
    //   category: 'Sports',
    //   seller_name: 'Morie Poschel',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 33753,
    //   auto_upload: true
    // },
    // {
    //   id: 784,
    //   title: 'Universal actuating support',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 801,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 4.2,
    //   category: 'Books',
    //   seller_name: 'Pierette Tipping',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 97041,
    //   auto_upload: false
    // },
    // {
    //   id: 785,
    //   title: 'User-centric human-resource solution',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 269,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.3,
    //   category: 'Sports',
    //   seller_name: 'Gabey Grunnell',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 31524,
    //   auto_upload: false
    // },
    // {
    //   id: 786,
    //   title: 'Function-based system-worthy time-frame',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 831,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 3.5,
    //   category: 'Technology',
    //   seller_name: 'Regan Figura',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 56626,
    //   auto_upload: false
    // },
    // {
    //   id: 787,
    //   title: 'Stand-alone next generation artificial intelligence',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 698,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.2,
    //   category: 'Superhero',
    //   seller_name: 'Cirilo Jimmison',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 14704,
    //   auto_upload: false
    // },
    // {
    //   id: 788,
    //   title: 'Persevering mobile frame',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 291,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.3,
    //   category: 'Superhero',
    //   seller_name: 'Lizzie Bourdel',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 89630,
    //   auto_upload: false
    // },
    // {
    //   id: 789,
    //   title: 'Organic 5th generation projection',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 423,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 3.4,
    //   category: 'Home Decor',
    //   seller_name: 'Blinny Milmith',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 54974,
    //   auto_upload: true
    // },
    // {
    //   id: 790,
    //   title: 'Open-architected global knowledge user',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 155,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 3.5,
    //   category: 'Books',
    //   seller_name: "Clayborne D'Alesio",
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 7370,
    //   auto_upload: false
    // },
    // {
    //   id: 791,
    //   title: 'Profound mobile standardization',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 952,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.9,
    //   category: 'Beauty',
    //   seller_name: 'Meg Martlew',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 92723,
    //   auto_upload: true
    // },
    // {
    //   id: 792,
    //   title: 'Ameliorated homogeneous framework',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 412,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 4.0,
    //   category: 'Technology',
    //   seller_name: 'Issi Render',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 66311,
    //   auto_upload: true
    // },
    // {
    //   id: 793,
    //   title: 'Diverse needs-based database',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 959,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 4.0,
    //   category: 'Home Decor',
    //   seller_name: 'Gabbi Khristyukhin',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 61726,
    //   auto_upload: true
    // },
    // {
    //   id: 794,
    //   title: 'Team-oriented modular customer loyalty',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 427,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.6,
    //   category: 'Superhero',
    //   seller_name: 'Eimile Gert',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 51186,
    //   auto_upload: false
    // },
    // {
    //   id: 795,
    //   title: 'Self-enabling user-facing firmware',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 688,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.1,
    //   category: 'Superhero',
    //   seller_name: 'Winslow Hoyle',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 45034,
    //   auto_upload: false
    // },
    // {
    //   id: 796,
    //   title: 'Face to face intangible interface',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 880,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 3.0,
    //   category: 'Fashion',
    //   seller_name: 'Garey Moehler',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 85468,
    //   auto_upload: true
    // },
    // {
    //   id: 797,
    //   title: 'Object-based logistical product',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 233,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 3.1,
    //   category: 'Technology',
    //   seller_name: 'Kevon Brobeck',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 40945,
    //   auto_upload: true
    // },
    // {
    //   id: 798,
    //   title: 'Horizontal homogeneous knowledge base',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 889,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.8,
    //   category: 'Technology',
    //   seller_name: 'Shel Nolder',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 7583,
    //   auto_upload: true
    // },
    // {
    //   id: 799,
    //   title: 'Assimilated motivating instruction set',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 808,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.0,
    //   category: 'Beauty',
    //   seller_name: 'Timothea Caldero',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 36557,
    //   auto_upload: false
    // },
    // {
    //   id: 800,
    //   title: 'Profit-focused interactive implementation',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 91,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 4.3,
    //   category: 'Toys',
    //   seller_name: 'Gene Godson',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 97292,
    //   auto_upload: true
    // },
    // {
    //   id: 801,
    //   title: 'Distributed solution-oriented model',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 924,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.6,
    //   category: 'Beauty',
    //   seller_name: 'Fleming Kinney',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 80425,
    //   auto_upload: false
    // },
    // {
    //   id: 802,
    //   title: 'Face to face asymmetric initiative',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 604,
    //   description:
    //     'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.8,
    //   category: 'Beauty',
    //   seller_name: 'Rose Graveson',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 30544,
    //   auto_upload: false
    // },
    // {
    //   id: 803,
    //   title: 'Multi-tiered background local area network',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 423,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.3,
    //   category: 'Fashion',
    //   seller_name: 'Tildy Whellans',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 85391,
    //   auto_upload: false
    // },
    // {
    //   id: 804,
    //   title: 'Face to face stable throughput',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 347,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.6,
    //   category: 'Technology',
    //   seller_name: 'Schuyler Macbeth',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 89897,
    //   auto_upload: true
    // },
    // {
    //   id: 805,
    //   title: 'Enterprise-wide 24 hour neural-net',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 695,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 3.1,
    //   category: 'Sports',
    //   seller_name: 'Antone Dubery',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 75393,
    //   auto_upload: false
    // },
    // {
    //   id: 806,
    //   title: 'Ergonomic upward-trending superstructure',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 206,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 4.7,
    //   category: 'Beauty',
    //   seller_name: 'Horatio Gannicleff',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 64880,
    //   auto_upload: true
    // },
    // {
    //   id: 807,
    //   title: 'Horizontal 6th generation forecast',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 457,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.9,
    //   category: 'Home Decor',
    //   seller_name: 'Redd Docherty',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 33061,
    //   auto_upload: true
    // },
    // {
    //   id: 808,
    //   title: 'Exclusive holistic secured line',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 283,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.8,
    //   category: 'Sports',
    //   seller_name: 'Sena Reiglar',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 77776,
    //   auto_upload: false
    // },
    // {
    //   id: 809,
    //   title: 'Optimized neutral data-warehouse',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 626,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 3.3,
    //   category: 'Superhero',
    //   seller_name: 'Anjanette Vertey',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 5308,
    //   auto_upload: false
    // },
    // {
    //   id: 810,
    //   title: 'User-centric systematic middleware',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 157,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 3.0,
    //   category: 'Toys',
    //   seller_name: 'Britteny Getcliffe',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 9048,
    //   auto_upload: true
    // },
    // {
    //   id: 811,
    //   title: 'Customer-focused intermediate encoding',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 619,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.0,
    //   category: 'Fashion',
    //   seller_name: 'Mikael Adamski',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 37853,
    //   auto_upload: false
    // },
    // {
    //   id: 812,
    //   title: 'Grass-roots eco-centric strategy',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 388,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 4.3,
    //   category: 'Toys',
    //   seller_name: 'Dael Coolahan',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 40444,
    //   auto_upload: false
    // },
    // {
    //   id: 813,
    //   title: 'Open-source methodical policy',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 237,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 3.1,
    //   category: 'Toys',
    //   seller_name: 'Malinde Ellery',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 13344,
    //   auto_upload: false
    // },
    // {
    //   id: 814,
    //   title: 'Quality-focused heuristic collaboration',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 406,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 4.9,
    //   category: 'Technology',
    //   seller_name: 'Dru Hallor',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 60801,
    //   auto_upload: true
    // },
    // {
    //   id: 815,
    //   title: 'Realigned mobile budgetary management',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 358,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.2,
    //   category: 'Fashion',
    //   seller_name: 'Tawnya Roads',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 37936,
    //   auto_upload: true
    // },
    // {
    //   id: 816,
    //   title: 'Upgradable intermediate encoding',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 980,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 3.5,
    //   category: 'Beauty',
    //   seller_name: 'Jillayne Raincin',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 95474,
    //   auto_upload: true
    // },
    // {
    //   id: 817,
    //   title: 'Optional modular task-force',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 736,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 3.9,
    //   category: 'Books',
    //   seller_name: 'Pearle Talloe',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 76477,
    //   auto_upload: true
    // },
    // {
    //   id: 818,
    //   title: 'Open-source dedicated knowledge base',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 476,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 3.4,
    //   category: 'Toys',
    //   seller_name: 'Jarad Battany',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 35626,
    //   auto_upload: true
    // },
    // {
    //   id: 819,
    //   title: 'Future-proofed value-added throughput',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 60,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.6,
    //   category: 'Beauty',
    //   seller_name: 'Nealon Asbery',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 56056,
    //   auto_upload: false
    // },
    // {
    //   id: 820,
    //   title: 'Vision-oriented multi-tasking local area network',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 585,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 4.5,
    //   category: 'Toys',
    //   seller_name: 'Launce Perillo',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 45245,
    //   auto_upload: true
    // },
    // {
    //   id: 821,
    //   title: 'Universal 24 hour project',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 275,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.5,
    //   category: 'Technology',
    //   seller_name: 'Janessa Manjot',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 26379,
    //   auto_upload: false
    // },
    // {
    //   id: 822,
    //   title: 'Profit-focused regional knowledge base',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 460,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 4.8,
    //   category: 'Sports',
    //   seller_name: 'Maisey Wakerley',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 49654,
    //   auto_upload: true
    // },
    // {
    //   id: 823,
    //   title: 'Synergized asymmetric Graphical User Interface',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 592,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.1,
    //   category: 'Technology',
    //   seller_name: 'Madge Camelli',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 76830,
    //   auto_upload: true
    // },
    // {
    //   id: 824,
    //   title: 'Business-focused grid-enabled analyzer',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 478,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.3,
    //   category: 'Home Decor',
    //   seller_name: 'Rafaelita Sottell',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 46204,
    //   auto_upload: false
    // },
    // {
    //   id: 825,
    //   title: 'Multi-tiered attitude-oriented parallelism',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 250,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.9,
    //   category: 'Fashion',
    //   seller_name: 'Joachim Burdytt',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 68782,
    //   auto_upload: false
    // },
    // {
    //   id: 826,
    //   title: 'Programmable reciprocal extranet',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 741,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 4.8,
    //   category: 'Sports',
    //   seller_name: 'Ailina Arthars',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 50432,
    //   auto_upload: true
    // },
    // {
    //   id: 827,
    //   title: 'Seamless upward-trending encoding',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 107,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.2,
    //   category: 'Books',
    //   seller_name: 'Clementius Carlile',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 33371,
    //   auto_upload: false
    // },
    // {
    //   id: 828,
    //   title: 'Seamless bottom-line policy',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 677,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 4.6,
    //   category: 'Home Decor',
    //   seller_name: 'Hewie Togwell',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 46844,
    //   auto_upload: false
    // },
    // {
    //   id: 829,
    //   title: 'Exclusive explicit adapter',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 223,
    //   description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 4.1,
    //   category: 'Sports',
    //   seller_name: 'Frankie Crosston',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 44694,
    //   auto_upload: true
    // },
    // {
    //   id: 830,
    //   title: 'Distributed content-based system engine',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 102,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.6,
    //   category: 'Home Decor',
    //   seller_name: 'Mabel Mebius',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 34917,
    //   auto_upload: true
    // },
    // {
    //   id: 831,
    //   title: 'Down-sized well-modulated application',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 643,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.7,
    //   category: 'Animal',
    //   seller_name: 'Kit Brealey',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 15423,
    //   auto_upload: false
    // },
    // {
    //   id: 832,
    //   title: 'Networked exuding protocol',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 109,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.9,
    //   category: 'Books',
    //   seller_name: 'Cairistiona Auten',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 35567,
    //   auto_upload: true
    // },
    // {
    //   id: 833,
    //   title: 'Optimized zero administration neural-net',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 372,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.5,
    //   category: 'Beauty',
    //   seller_name: 'Katha Kemme',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 31805,
    //   auto_upload: false
    // },
    // {
    //   id: 834,
    //   title: 'Face to face fault-tolerant conglomeration',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 523,
    //   description:
    //     'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 4.2,
    //   category: 'Food',
    //   seller_name: 'Therine Siddell',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 55842,
    //   auto_upload: true
    // },
    // {
    //   id: 835,
    //   title: 'Enhanced optimizing time-frame',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 719,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.7,
    //   category: 'Fashion',
    //   seller_name: 'Florenza Crannage',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 28617,
    //   auto_upload: true
    // },
    // {
    //   id: 836,
    //   title: 'Fully-configurable asynchronous leverage',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 162,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.6,
    //   category: 'Toys',
    //   seller_name: 'Price Ruoff',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 90071,
    //   auto_upload: true
    // },
    // {
    //   id: 837,
    //   title: 'Reduced dynamic focus group',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 804,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    //   rating: 3.7,
    //   category: 'Animal',
    //   seller_name: 'Lily Ezzle',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 57083,
    //   auto_upload: false
    // },
    // {
    //   id: 838,
    //   title: 'Decentralized contextually-based flexibility',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 257,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 4.6,
    //   category: 'Home Decor',
    //   seller_name: 'Viole MacLennan',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 32142,
    //   auto_upload: false
    // },
    // {
    //   id: 839,
    //   title: 'Ameliorated systematic open architecture',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 258,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 4.6,
    //   category: 'Food',
    //   seller_name: 'Thane Thomtson',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 12942,
    //   auto_upload: true
    // },
    // {
    //   id: 840,
    //   title: 'Right-sized discrete encoding',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 173,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.9,
    //   category: 'Home Decor',
    //   seller_name: 'Vikky Ebbitt',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 95443,
    //   auto_upload: true
    // },
    // {
    //   id: 841,
    //   title: 'Virtual encompassing ability',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 515,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 4.5,
    //   category: 'Home Decor',
    //   seller_name: 'Sylvester Mashal',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 9895,
    //   auto_upload: false
    // },
    // {
    //   id: 842,
    //   title: 'Monitored even-keeled firmware',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 231,
    //   description:
    //     'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 3.9,
    //   category: 'Sports',
    //   seller_name: 'Cary Jeacop',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 27733,
    //   auto_upload: true
    // },
    // {
    //   id: 843,
    //   title: 'Cross-platform optimal utilisation',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 882,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 3.6,
    //   category: 'Toys',
    //   seller_name: 'Bevvy Merigot',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 33422,
    //   auto_upload: true
    // },
    // {
    //   id: 844,
    //   title: 'Enterprise-wide full-range artificial intelligence',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 882,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 4.8,
    //   category: 'Beauty',
    //   seller_name: 'Renae Sagerson',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 46452,
    //   auto_upload: false
    // },
    // {
    //   id: 845,
    //   title: 'Cloned zero administration protocol',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 99,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 3.7,
    //   category: 'Animal',
    //   seller_name: 'Glenda Shalloe',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 91105,
    //   auto_upload: true
    // },
    // {
    //   id: 846,
    //   title: 'Expanded bottom-line customer loyalty',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 158,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 3.1,
    //   category: 'Beauty',
    //   seller_name: 'Clo Shadrack',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 93889,
    //   auto_upload: true
    // },
    // {
    //   id: 847,
    //   title: 'Horizontal full-range Graphical User Interface',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 728,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    //   rating: 4.7,
    //   category: 'Fashion',
    //   seller_name: 'Laird Chessman',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 20848,
    //   auto_upload: false
    // },
    // {
    //   id: 848,
    //   title: 'Front-line asynchronous policy',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 406,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 3.3,
    //   category: 'Superhero',
    //   seller_name: 'Michail Baumadier',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 60679,
    //   auto_upload: true
    // },
    // {
    //   id: 849,
    //   title: 'Visionary heuristic solution',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 51,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.6,
    //   category: 'Beauty',
    //   seller_name: 'Frasier McElory',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 87368,
    //   auto_upload: true
    // },
    // {
    //   id: 850,
    //   title: 'Synchronised web-enabled approach',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 281,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 3.5,
    //   category: 'Toys',
    //   seller_name: 'Ema Bradneck',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 13243,
    //   auto_upload: false
    // },
    // {
    //   id: 851,
    //   title: 'Reverse-engineered intangible instruction set',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 319,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.2,
    //   category: 'Sports',
    //   seller_name: 'Mahmud Daughton',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 8080,
    //   auto_upload: false
    // },
    // {
    //   id: 852,
    //   title: 'Programmable dynamic knowledge user',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 231,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    //   rating: 4.4,
    //   category: 'Food',
    //   seller_name: 'Marinna Venditti',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 39230,
    //   auto_upload: true
    // },
    // {
    //   id: 853,
    //   title: 'Profit-focused multi-state focus group',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 866,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.3,
    //   category: 'Superhero',
    //   seller_name: 'Marlie Trevers',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 44535,
    //   auto_upload: true
    // },
    // {
    //   id: 854,
    //   title: 'Organized responsive moratorium',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 56,
    //   description:
    //     'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.9,
    //   category: 'Fashion',
    //   seller_name: 'Maximilianus Anfossi',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 24308,
    //   auto_upload: false
    // },
    // {
    //   id: 855,
    //   title: 'Versatile responsive access',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 686,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.4,
    //   category: 'Home Decor',
    //   seller_name: 'Lynette Mussolini',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 84061,
    //   auto_upload: false
    // },
    // {
    //   id: 856,
    //   title: 'Organized foreground forecast',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 552,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.9,
    //   category: 'Fashion',
    //   seller_name: 'Arron Bacop',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 37109,
    //   auto_upload: true
    // },
    // {
    //   id: 857,
    //   title: 'Fundamental dynamic moratorium',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 715,
    //   description:
    //     'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    //   rating: 3.9,
    //   category: 'Superhero',
    //   seller_name: 'Cully Blainey',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 48148,
    //   auto_upload: false
    // },
    // {
    //   id: 858,
    //   title: 'Optional scalable model',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 193,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 3.4,
    //   category: 'Animal',
    //   seller_name: 'Annis Cleugh',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 39241,
    //   auto_upload: false
    // },
    // {
    //   id: 859,
    //   title: 'Compatible solution-oriented hardware',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 81,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Paige De Mars',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 48354,
    //   auto_upload: false
    // },
    // {
    //   id: 860,
    //   title: 'Business-focused uniform archive',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 661,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 4.6,
    //   category: 'Animal',
    //   seller_name: 'Wilfred Shovelbottom',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 18638,
    //   auto_upload: true
    // },
    // {
    //   id: 861,
    //   title: 'Customer-focused next generation hierarchy',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 213,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.9,
    //   category: 'Beauty',
    //   seller_name: 'Petunia Edlestone',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 96001,
    //   auto_upload: false
    // },
    // {
    //   id: 862,
    //   title: 'Inverse interactive challenge',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 254,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.2,
    //   category: 'Food',
    //   seller_name: 'Brandais Instrell',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 82900,
    //   auto_upload: false
    // },
    // {
    //   id: 863,
    //   title: 'Re-contextualized homogeneous service-desk',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 338,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.4,
    //   category: 'Home Decor',
    //   seller_name: 'Carmencita Jentges',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 93520,
    //   auto_upload: true
    // },
    // {
    //   id: 864,
    //   title: 'Seamless 6th generation approach',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 467,
    //   description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 3.2,
    //   category: 'Home Decor',
    //   seller_name: 'Antonetta Malec',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 13811,
    //   auto_upload: true
    // },
    // {
    //   id: 865,
    //   title: 'Total empowering support',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 963,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    //   rating: 4.3,
    //   category: 'Books',
    //   seller_name: 'Shaylyn Heynen',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 65108,
    //   auto_upload: false
    // },
    // {
    //   id: 866,
    //   title: 'Synergized global open architecture',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 689,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 3.5,
    //   category: 'Technology',
    //   seller_name: 'Astrid McGennis',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 94920,
    //   auto_upload: true
    // },
    // {
    //   id: 867,
    //   title: 'Innovative bi-directional firmware',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 399,
    //   description:
    //     'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 4.2,
    //   category: 'Technology',
    //   seller_name: 'Phil Harget',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 17225,
    //   auto_upload: true
    // },
    // {
    //   id: 868,
    //   title: 'Quality-focused client-server projection',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 730,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 4.8,
    //   category: 'Sports',
    //   seller_name: 'Molly Alvar',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 72059,
    //   auto_upload: true
    // },
    // {
    //   id: 869,
    //   title: 'Automated client-server concept',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 485,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    //   rating: 4.5,
    //   category: 'Beauty',
    //   seller_name: 'Saree Hingeley',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 82856,
    //   auto_upload: true
    // },
    // {
    //   id: 870,
    //   title: 'Enterprise-wide secondary initiative',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 148,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.1,
    //   category: 'Books',
    //   seller_name: 'Yardley Wayman',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 32496,
    //   auto_upload: false
    // },
    // {
    //   id: 871,
    //   title: 'Assimilated static software',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 564,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 3.2,
    //   category: 'Books',
    //   seller_name: 'Eamon Mertin',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 96790,
    //   auto_upload: false
    // },
    // {
    //   id: 872,
    //   title: 'De-engineered scalable secured line',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 471,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.6,
    //   category: 'Technology',
    //   seller_name: 'Marylin Presshaugh',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 63020,
    //   auto_upload: true
    // },
    // {
    //   id: 873,
    //   title: 'Centralized optimal complexity',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 821,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.7,
    //   category: 'Toys',
    //   seller_name: 'Isobel Kopf',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 96046,
    //   auto_upload: true
    // },
    // {
    //   id: 874,
    //   title: 'Total dynamic encryption',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 659,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 4.7,
    //   category: 'Fashion',
    //   seller_name: 'Margaret Brusby',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 85359,
    //   auto_upload: true
    // },
    // {
    //   id: 875,
    //   title: 'Open-architected fresh-thinking database',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 234,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.7,
    //   category: 'Beauty',
    //   seller_name: 'Rafaello Ficken',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 17605,
    //   auto_upload: true
    // },
    // {
    //   id: 876,
    //   title: 'Optimized cohesive productivity',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 268,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 3.7,
    //   category: 'Fashion',
    //   seller_name: "Anderea O'Neal",
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 10752,
    //   auto_upload: true
    // },
    // {
    //   id: 877,
    //   title: 'Managed empowering core',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 497,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.6,
    //   category: 'Technology',
    //   seller_name: 'Lorene Kemwal',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 41597,
    //   auto_upload: false
    // },
    // {
    //   id: 878,
    //   title: 'Fundamental foreground standardization',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 547,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.4,
    //   category: 'Superhero',
    //   seller_name: 'Nickolaus Weblin',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 99768,
    //   auto_upload: true
    // },
    // {
    //   id: 879,
    //   title: 'Streamlined zero administration synergy',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 181,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 4.3,
    //   category: 'Food',
    //   seller_name: 'Fernando Cheine',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 66636,
    //   auto_upload: true
    // },
    // {
    //   id: 880,
    //   title: 'Streamlined solution-oriented functionalities',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 960,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 4.6,
    //   category: 'Superhero',
    //   seller_name: 'Roy Alfwy',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 70214,
    //   auto_upload: true
    // },
    // {
    //   id: 881,
    //   title: 'Integrated foreground middleware',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 884,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.9,
    //   category: 'Home Decor',
    //   seller_name: 'Kacie Theuff',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 71173,
    //   auto_upload: true
    // },
    // {
    //   id: 882,
    //   title: 'Intuitive tangible projection',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 132,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.0,
    //   category: 'Home Decor',
    //   seller_name: 'Denney Kelleway',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 24109,
    //   auto_upload: false
    // },
    // {
    //   id: 883,
    //   title: 'Customizable cohesive core',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 282,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 3.2,
    //   category: 'Food',
    //   seller_name: 'Mariette Ridler',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 36953,
    //   auto_upload: false
    // },
    // {
    //   id: 884,
    //   title: 'Assimilated optimal toolset',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 638,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 4.5,
    //   category: 'Beauty',
    //   seller_name: 'Daryl Keinrat',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 38344,
    //   auto_upload: true
    // },
    // {
    //   id: 885,
    //   title: 'Right-sized 24/7 open system',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 58,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 4.8,
    //   category: 'Food',
    //   seller_name: 'Rochette Redpath',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 38624,
    //   auto_upload: false
    // },
    // {
    //   id: 886,
    //   title: 'De-engineered upward-trending help-desk',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 951,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.8,
    //   category: 'Animal',
    //   seller_name: 'Rakel Mattack',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 87305,
    //   auto_upload: false
    // },
    // {
    //   id: 887,
    //   title: 'Persevering optimizing data-warehouse',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 883,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 3.9,
    //   category: 'Beauty',
    //   seller_name: "Robb O'Cridigan",
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 90029,
    //   auto_upload: true
    // },
    // {
    //   id: 888,
    //   title: 'Open-architected value-added process improvement',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 273,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.9,
    //   category: 'Home Decor',
    //   seller_name: 'Daniele Laverick',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 12420,
    //   auto_upload: true
    // },
    // {
    //   id: 889,
    //   title: 'Persistent tertiary instruction set',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 532,
    //   description:
    //     'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.4,
    //   category: 'Beauty',
    //   seller_name: 'Vladamir Bernakiewicz',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 60494,
    //   auto_upload: false
    // },
    // {
    //   id: 890,
    //   title: 'Compatible dedicated firmware',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 222,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.7,
    //   category: 'Superhero',
    //   seller_name: 'Adaline Spendlove',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 90958,
    //   auto_upload: true
    // },
    // {
    //   id: 891,
    //   title: 'Digitized tertiary software',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 370,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.5,
    //   category: 'Sports',
    //   seller_name: 'Reggis Jepperson',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 84912,
    //   auto_upload: false
    // },
    // {
    //   id: 892,
    //   title: 'Team-oriented impactful forecast',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 535,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 3.9,
    //   category: 'Sports',
    //   seller_name: 'Belita Meece',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 21773,
    //   auto_upload: false
    // },
    // {
    //   id: 893,
    //   title: 'Right-sized optimizing standardization',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 168,
    //   description:
    //     'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 4.1,
    //   category: 'Books',
    //   seller_name: 'Mannie Gibbard',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 35816,
    //   auto_upload: true
    // },
    // {
    //   id: 894,
    //   title: 'Inverse demand-driven flexibility',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 131,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.1,
    //   category: 'Toys',
    //   seller_name: 'Bernice Maxfield',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 69316,
    //   auto_upload: false
    // },
    // {
    //   id: 895,
    //   title: 'Multi-tiered dedicated moratorium',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 701,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 4.3,
    //   category: 'Books',
    //   seller_name: 'Chane Durrett',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 81149,
    //   auto_upload: true
    // },
    // {
    //   id: 896,
    //   title: 'Focused incremental hierarchy',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 260,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 4.9,
    //   category: 'Toys',
    //   seller_name: 'Olav Kaindl',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 46290,
    //   auto_upload: true
    // },
    // {
    //   id: 897,
    //   title: 'Ergonomic actuating complexity',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 306,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 4.3,
    //   category: 'Beauty',
    //   seller_name: 'Kris Kupec',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 63115,
    //   auto_upload: true
    // },
    // {
    //   id: 898,
    //   title: 'Object-based stable website',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 189,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.3,
    //   category: 'Toys',
    //   seller_name: 'Prince Gulleford',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 97660,
    //   auto_upload: false
    // },
    // {
    //   id: 899,
    //   title: 'Implemented value-added approach',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 872,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.4,
    //   category: 'Home Decor',
    //   seller_name: 'Decca Blood',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 61716,
    //   auto_upload: false
    // },
    // {
    //   id: 900,
    //   title: 'Up-sized explicit standardization',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 157,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 3.0,
    //   category: 'Animal',
    //   seller_name: 'Ravid Heynel',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 76228,
    //   auto_upload: false
    // },
    // {
    //   id: 901,
    //   title: 'Switchable real-time time-frame',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 527,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.4,
    //   category: 'Home Decor',
    //   seller_name: 'Carlye Blaydon',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 37559,
    //   auto_upload: true
    // },
    // {
    //   id: 902,
    //   title: 'Ameliorated grid-enabled success',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 297,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 5.0,
    //   category: 'Superhero',
    //   seller_name: 'Gannie Creyke',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 52665,
    //   auto_upload: false
    // },
    // {
    //   id: 903,
    //   title: 'Digitized fault-tolerant database',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 565,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 3.5,
    //   category: 'Food',
    //   seller_name: 'Eveline McClune',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 84151,
    //   auto_upload: true
    // },
    // {
    //   id: 904,
    //   title: 'Total neutral orchestration',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 310,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    //   rating: 4.6,
    //   category: 'Superhero',
    //   seller_name: 'Gilli Godden',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 54868,
    //   auto_upload: true
    // },
    // {
    //   id: 905,
    //   title: 'Reverse-engineered national array',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 794,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 5.0,
    //   category: 'Books',
    //   seller_name: 'Lenna Martygin',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 24547,
    //   auto_upload: true
    // },
    // {
    //   id: 906,
    //   title: 'Ergonomic system-worthy collaboration',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 730,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    //   rating: 4.6,
    //   category: 'Sports',
    //   seller_name: 'Wenonah Worrill',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 26070,
    //   auto_upload: true
    // },
    // {
    //   id: 907,
    //   title: 'Focused logistical internet solution',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 697,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 4.0,
    //   category: 'Animal',
    //   seller_name: 'Chandal Bruck',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 7033,
    //   auto_upload: false
    // },
    // {
    //   id: 908,
    //   title: 'Up-sized dynamic extranet',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 919,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 4.1,
    //   category: 'Food',
    //   seller_name: 'Mela Spacy',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 61695,
    //   auto_upload: true
    // },
    // {
    //   id: 909,
    //   title: 'Total eco-centric complexity',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 262,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.5,
    //   category: 'Technology',
    //   seller_name: 'Marlow Darrow',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 68720,
    //   auto_upload: true
    // },
    // {
    //   id: 910,
    //   title: 'Cross-group non-volatile orchestration',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 877,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.3,
    //   category: 'Food',
    //   seller_name: 'Spense Katt',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 99350,
    //   auto_upload: false
    // },
    // {
    //   id: 911,
    //   title: 'Profound mission-critical software',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 186,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.6,
    //   category: 'Toys',
    //   seller_name: 'Glori Danigel',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 35524,
    //   auto_upload: true
    // },
    // {
    //   id: 912,
    //   title: 'Exclusive zero defect initiative',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 561,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.1,
    //   category: 'Beauty',
    //   seller_name: 'Renaldo Doyland',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 53697,
    //   auto_upload: false
    // },
    // {
    //   id: 913,
    //   title: 'Monitored next generation utilisation',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 578,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    //   rating: 4.2,
    //   category: 'Technology',
    //   seller_name: 'Julie Onians',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 71724,
    //   auto_upload: false
    // },
    // {
    //   id: 914,
    //   title: 'Implemented motivating archive',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 857,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.5,
    //   category: 'Toys',
    //   seller_name: 'Emmi Bigrigg',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 76464,
    //   auto_upload: false
    // },
    // {
    //   id: 915,
    //   title: 'Triple-buffered actuating software',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 110,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    //   rating: 3.6,
    //   category: 'Beauty',
    //   seller_name: 'Melody Brammall',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 34730,
    //   auto_upload: false
    // },
    // {
    //   id: 916,
    //   title: 'Stand-alone transitional policy',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 836,
    //   description:
    //     'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 3.3,
    //   category: 'Sports',
    //   seller_name: 'Corie Ridhole',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 51624,
    //   auto_upload: false
    // },
    // {
    //   id: 917,
    //   title: 'Re-engineered mobile array',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 544,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 4.6,
    //   category: 'Fashion',
    //   seller_name: 'Lavinia Echalier',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 43095,
    //   auto_upload: false
    // },
    // {
    //   id: 918,
    //   title: 'Sharable real-time application',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 854,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.2,
    //   category: 'Toys',
    //   seller_name: 'Stanly Ruslinge',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 12718,
    //   auto_upload: true
    // },
    // {
    //   id: 919,
    //   title: 'Function-based attitude-oriented project',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 321,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.5,
    //   category: 'Toys',
    //   seller_name: 'Albertina Fishpoole',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 48870,
    //   auto_upload: true
    // },
    // {
    //   id: 920,
    //   title: 'Pre-emptive scalable system engine',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 605,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.3,
    //   category: 'Animal',
    //   seller_name: 'Neill Mummery',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 8734,
    //   auto_upload: true
    // },
    // {
    //   id: 921,
    //   title: 'De-engineered static adapter',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 893,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.7,
    //   category: 'Toys',
    //   seller_name: 'Constantino Kopecka',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 66691,
    //   auto_upload: true
    // },
    // {
    //   id: 922,
    //   title: 'Phased web-enabled hub',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 165,
    //   description:
    //     'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 4.1,
    //   category: 'Books',
    //   seller_name: 'Loren Stairmond',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 63615,
    //   auto_upload: false
    // },
    // {
    //   id: 923,
    //   title: 'Multi-lateral intermediate database',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 132,
    //   description:
    //     'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    //   rating: 4.5,
    //   category: 'Food',
    //   seller_name: 'Randene Cluley',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 61734,
    //   auto_upload: false
    // },
    // {
    //   id: 924,
    //   title: 'Universal maximized info-mediaries',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 63,
    //   description:
    //     'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    //   rating: 4.7,
    //   category: 'Toys',
    //   seller_name: 'Tripp Osinin',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 17939,
    //   auto_upload: true
    // },
    // {
    //   id: 925,
    //   title: 'Exclusive actuating utilisation',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 657,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    //   rating: 3.6,
    //   category: 'Fashion',
    //   seller_name: 'Sherwynd Kowal',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 24034,
    //   auto_upload: false
    // },
    // {
    //   id: 926,
    //   title: 'Up-sized fault-tolerant algorithm',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 520,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 4.0,
    //   category: 'Sports',
    //   seller_name: 'Cad Nerheny',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 25052,
    //   auto_upload: true
    // },
    // {
    //   id: 927,
    //   title: 'Triple-buffered disintermediate conglomeration',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 976,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.7,
    //   category: 'Home Decor',
    //   seller_name: 'Rafaelita Huddles',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 96998,
    //   auto_upload: true
    // },
    // {
    //   id: 928,
    //   title: 'Assimilated solution-oriented application',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 308,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 4.5,
    //   category: 'Fashion',
    //   seller_name: 'Antoine Biesinger',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 93563,
    //   auto_upload: false
    // },
    // {
    //   id: 929,
    //   title: 'Organized optimizing circuit',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 299,
    //   description:
    //     'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 3.1,
    //   category: 'Superhero',
    //   seller_name: 'Baldwin Lomis',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 11763,
    //   auto_upload: false
    // },
    // {
    //   id: 930,
    //   title: 'Quality-focused real-time infrastructure',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 208,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    //   rating: 3.3,
    //   category: 'Sports',
    //   seller_name: 'Keri Gaskal',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 9613,
    //   auto_upload: false
    // },
    // {
    //   id: 931,
    //   title: 'User-centric multimedia capacity',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 243,
    //   description:
    //     'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    //   rating: 4.5,
    //   category: 'Sports',
    //   seller_name: 'Vivyan Harken',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 35534,
    //   auto_upload: false
    // },
    // {
    //   id: 932,
    //   title: 'Phased local service-desk',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 910,
    //   description:
    //     'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.1,
    //   category: 'Technology',
    //   seller_name: 'Nathanil Cavnor',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 81318,
    //   auto_upload: true
    // },
    // {
    //   id: 933,
    //   title: 'Balanced contextually-based contingency',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 231,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 4.1,
    //   category: 'Animal',
    //   seller_name: 'Tamarra Osgorby',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 83507,
    //   auto_upload: false
    // },
    // {
    //   id: 934,
    //   title: 'Pre-emptive modular instruction set',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 287,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 4.3,
    //   category: 'Superhero',
    //   seller_name: 'Trista Featherstone',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 93277,
    //   auto_upload: false
    // },
    // {
    //   id: 935,
    //   title: 'Virtual zero defect groupware',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 987,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    //   rating: 3.2,
    //   category: 'Books',
    //   seller_name: 'Wini Ca',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 36725,
    //   auto_upload: false
    // },
    // {
    //   id: 936,
    //   title: 'Grass-roots 6th generation capability',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 180,
    //   description:
    //     'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.5,
    //   category: 'Technology',
    //   seller_name: 'Bellina Farlambe',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 33299,
    //   auto_upload: true
    // },
    // {
    //   id: 937,
    //   title: 'Vision-oriented analyzing model',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 747,
    //   description:
    //     'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 3.0,
    //   category: 'Home Decor',
    //   seller_name: 'Delaney Mariaud',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 53754,
    //   auto_upload: true
    // },
    // {
    //   id: 938,
    //   title: 'Phased 24 hour matrix',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 452,
    //   description:
    //     'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.0,
    //   category: 'Books',
    //   seller_name: 'Arv Barkus',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 24358,
    //   auto_upload: false
    // },
    // {
    //   id: 939,
    //   title: 'Reduced multimedia time-frame',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 203,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.0,
    //   category: 'Sports',
    //   seller_name: 'Alexis Duesberry',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 27603,
    //   auto_upload: false
    // },
    // {
    //   id: 940,
    //   title: 'Multi-tiered contextually-based hub',
    //   image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   price: 704,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 3.8,
    //   category: 'Superhero',
    //   seller_name: 'Karlen Critch',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 75344,
    //   auto_upload: false
    // },
    // {
    //   id: 941,
    //   title: 'Decentralized explicit ability',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 222,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 3.6,
    //   category: 'Home Decor',
    //   seller_name: 'Zollie Giovani',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 89105,
    //   auto_upload: true
    // },
    // {
    //   id: 942,
    //   title: 'Multi-channelled systematic open architecture',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 293,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.3,
    //   category: 'Books',
    //   seller_name: 'Jan Kynton',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 77186,
    //   auto_upload: true
    // },
    // {
    //   id: 943,
    //   title: 'Object-based asymmetric architecture',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 742,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 3.4,
    //   category: 'Technology',
    //   seller_name: 'Axel Goozee',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 66355,
    //   auto_upload: false
    // },
    // {
    //   id: 944,
    //   title: 'Organized stable website',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 307,
    //   description:
    //     'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 3.6,
    //   category: 'Books',
    //   seller_name: 'Mollee Keaton',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 28018,
    //   auto_upload: false
    // },
    // {
    //   id: 945,
    //   title: 'Intuitive composite ability',
    //   image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   price: 875,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 3.3,
    //   category: 'Home Decor',
    //   seller_name: 'Batsheva Clamo',
    //   seller_image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 67799,
    //   auto_upload: true
    // },
    // {
    //   id: 946,
    //   title: 'Reverse-engineered uniform internet solution',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 574,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.5,
    //   category: 'Toys',
    //   seller_name: 'Raimondo Kliesl',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 7214,
    //   auto_upload: false
    // },
    // {
    //   id: 947,
    //   title: 'Total contextually-based intranet',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 247,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    //   rating: 3.2,
    //   category: 'Superhero',
    //   seller_name: 'Stinky Pautot',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 91954,
    //   auto_upload: true
    // },
    // {
    //   id: 948,
    //   title: 'User-centric non-volatile toolset',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 372,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 3.9,
    //   category: 'Technology',
    //   seller_name: 'Sande Rippen',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 63704,
    //   auto_upload: false
    // },
    // {
    //   id: 949,
    //   title: 'Seamless zero defect structure',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 588,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    //   rating: 4.1,
    //   category: 'Technology',
    //   seller_name: 'Sydel Mapowder',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 6568,
    //   auto_upload: true
    // },
    // {
    //   id: 950,
    //   title: 'Realigned multi-tasking emulation',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 470,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    //   rating: 4.5,
    //   category: 'Toys',
    //   seller_name: 'Chrissy Marple',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 27603,
    //   auto_upload: false
    // },
    // {
    //   id: 951,
    //   title: 'Compatible executive leverage',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 113,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    //   rating: 4.0,
    //   category: 'Sports',
    //   seller_name: 'Hughie Tenwick',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 77251,
    //   auto_upload: false
    // },
    // {
    //   id: 952,
    //   title: 'Multi-lateral didactic contingency',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 189,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    //   rating: 4.0,
    //   category: 'Books',
    //   seller_name: 'Dolph Birrell',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 74767,
    //   auto_upload: true
    // },
    // {
    //   id: 953,
    //   title: 'Integrated solution-oriented service-desk',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 228,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.2,
    //   category: 'Books',
    //   seller_name: 'Adolf Jewson',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 64723,
    //   auto_upload: false
    // },
    // {
    //   id: 954,
    //   title: 'Customizable homogeneous contingency',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 562,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 3.4,
    //   category: 'Home Decor',
    //   seller_name: 'Carrie Brice',
    //   seller_image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 52975,
    //   auto_upload: false
    // },
    // {
    //   id: 955,
    //   title: 'Seamless bottom-line software',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 381,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 4.2,
    //   category: 'Toys',
    //   seller_name: 'Linette Demann',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 38066,
    //   auto_upload: true
    // },
    // {
    //   id: 956,
    //   title: 'Versatile 24/7 solution',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 617,
    //   description:
    //     'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.9,
    //   category: 'Technology',
    //   seller_name: 'Cassy Twinterman',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 35473,
    //   auto_upload: true
    // },
    // {
    //   id: 957,
    //   title: 'Inverse discrete analyzer',
    //   image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   price: 786,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 4.6,
    //   category: 'Food',
    //   seller_name: 'Kirby Hannant',
    //   seller_image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 33989,
    //   auto_upload: true
    // },
    // {
    //   id: 958,
    //   title: 'Configurable object-oriented function',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 738,
    //   description:
    //     'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.3,
    //   category: 'Animal',
    //   seller_name: 'Shannan Levesque',
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 62571,
    //   auto_upload: false
    // },
    // {
    //   id: 959,
    //   title: 'Profit-focused dedicated portal',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 669,
    //   description:
    //     'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    //   rating: 4.8,
    //   category: 'Beauty',
    //   seller_name: 'Jerrilyn Saunders',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 20497,
    //   auto_upload: true
    // },
    // {
    //   id: 960,
    //   title: 'Cloned reciprocal installation',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 456,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 5.0,
    //   category: 'Animal',
    //   seller_name: 'Ronny Kilsby',
    //   seller_image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 68009,
    //   auto_upload: true
    // },
    // {
    //   id: 961,
    //   title: 'Future-proofed real-time algorithm',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 704,
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    //   rating: 3.1,
    //   category: 'Beauty',
    //   seller_name: 'Collie Castanyer',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 64216,
    //   auto_upload: false
    // },
    // {
    //   id: 962,
    //   title: 'Team-oriented homogeneous protocol',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 289,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    //   rating: 3.5,
    //   category: 'Fashion',
    //   seller_name: 'Celestina Daykin',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 37437,
    //   auto_upload: true
    // },
    // {
    //   id: 963,
    //   title: 'Centralized background utilisation',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 245,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 3.1,
    //   category: 'Animal',
    //   seller_name: 'Emelda Woodford',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 41941,
    //   auto_upload: false
    // },
    // {
    //   id: 964,
    //   title: 'Multi-layered content-based alliance',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 368,
    //   description:
    //     'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    //   rating: 4.0,
    //   category: 'Superhero',
    //   seller_name: 'Trumaine Turbern',
    //   seller_image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 98417,
    //   auto_upload: true
    // },
    // {
    //   id: 965,
    //   title: 'Object-based actuating middleware',
    //   image: 'https://i.ibb.co/XxDVJv6/VRC-image-B-F.png',
    //   price: 594,
    //   description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    //   rating: 4.5,
    //   category: 'Animal',
    //   seller_name: 'Colene Full',
    //   seller_image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 68786,
    //   auto_upload: false
    // },
    // {
    //   id: 966,
    //   title: 'Horizontal real-time solution',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 272,
    //   description:
    //     'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    //   rating: 3.4,
    //   category: 'Toys',
    //   seller_name: 'Mannie Prahm',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 30221,
    //   auto_upload: true
    // },
    // {
    //   id: 967,
    //   title: 'Advanced local policy',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 541,
    //   description:
    //     'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 4.6,
    //   category: 'Fashion',
    //   seller_name: 'Eliot Picken',
    //   seller_image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 20864,
    //   auto_upload: true
    // },
    // {
    //   id: 968,
    //   title: 'Visionary system-worthy protocol',
    //   image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   price: 381,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.0,
    //   category: 'Toys',
    //   seller_name: 'Billy Pickerell',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 78453,
    //   auto_upload: false
    // },
    // {
    //   id: 969,
    //   title: 'Multi-tiered well-modulated capability',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 522,
    //   description:
    //     'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    //   rating: 4.9,
    //   category: 'Animal',
    //   seller_name: 'Linnea Perott',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 11097,
    //   auto_upload: true
    // },
    // {
    //   id: 970,
    //   title: 'Re-engineered zero tolerance data-warehouse',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 188,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 4.5,
    //   category: 'Home Decor',
    //   seller_name: 'Brendis Parke',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 14493,
    //   auto_upload: true
    // },
    // {
    //   id: 971,
    //   title: 'Mandatory bandwidth-monitored benchmark',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 823,
    //   description:
    //     'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 4.0,
    //   category: 'Animal',
    //   seller_name: 'Korry Sofe',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 8729,
    //   auto_upload: false
    // },
    // {
    //   id: 972,
    //   title: 'Triple-buffered static alliance',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 189,
    //   description:
    //     'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    //   rating: 3.1,
    //   category: 'Books',
    //   seller_name: 'Fernando Raysdale',
    //   seller_image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 56406,
    //   auto_upload: true
    // },
    // {
    //   id: 973,
    //   title: 'Progressive static help-desk',
    //   image: 'https://i.ibb.co/xfgHHx4/VRC-image-J-M.png',
    //   price: 613,
    //   description:
    //     'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    //   rating: 3.3,
    //   category: 'Food',
    //   seller_name: 'Stafford Duling',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 20604,
    //   auto_upload: true
    // },
    // {
    //   id: 974,
    //   title: 'Right-sized exuding budgetary management',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 320,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 4.8,
    //   category: 'Superhero',
    //   seller_name: 'Henka Marchington',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 28991,
    //   auto_upload: true
    // },
    // {
    //   id: 975,
    //   title: 'Open-source 4th generation leverage',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 224,
    //   description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    //   rating: 3.7,
    //   category: 'Animal',
    //   seller_name: 'Brennan Asee',
    //   seller_image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 62313,
    //   auto_upload: true
    // },
    // {
    //   id: 976,
    //   title: 'Up-sized regional standardization',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 655,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 4.4,
    //   category: 'Toys',
    //   seller_name: 'Bernhard Fynan',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 70771,
    //   auto_upload: true
    // },
    // {
    //   id: 977,
    //   title: 'Front-line attitude-oriented algorithm',
    //   image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   price: 492,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.8,
    //   category: 'Beauty',
    //   seller_name: 'Deane Guillou',
    //   seller_image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 51593,
    //   auto_upload: false
    // },
    // {
    //   id: 978,
    //   title: 'Devolved demand-driven budgetary management',
    //   image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   price: 347,
    //   description:
    //     'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    //   rating: 3.6,
    //   category: 'Books',
    //   seller_name: 'Genni Cargon',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 25848,
    //   auto_upload: false
    // },
    // {
    //   id: 979,
    //   title: 'Right-sized logistical encryption',
    //   image: 'https://i.ibb.co/HYwFQWH/VRC-image-C-M.png',
    //   price: 283,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    //   rating: 4.7,
    //   category: 'Beauty',
    //   seller_name: 'Brenden Bignell',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 41433,
    //   auto_upload: true
    // },
    // {
    //   id: 980,
    //   title: 'Face to face secondary intranet',
    //   image: 'https://i.ibb.co/GHcPY4y/VRC-image-N-F.png',
    //   price: 401,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 3.8,
    //   category: 'Toys',
    //   seller_name: 'Perrine Kunes',
    //   seller_image: 'https://i.ibb.co/jMSPzpP/VRC-image-T-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 30002,
    //   auto_upload: false
    // },
    // {
    //   id: 981,
    //   title: 'Implemented clear-thinking functionalities',
    //   image: 'https://i.ibb.co/yd56QGd/VRC-image-O-F.png',
    //   price: 312,
    //   description:
    //     'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    //   rating: 4.4,
    //   category: 'Food',
    //   seller_name: 'Burgess McAmish',
    //   seller_image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 66784,
    //   auto_upload: false
    // },
    // {
    //   id: 982,
    //   title: 'Progressive tertiary database',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 336,
    //   description:
    //     'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    //   rating: 3.0,
    //   category: 'Animal',
    //   seller_name: 'Harlin Frenzl',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 21322,
    //   auto_upload: true
    // },
    // {
    //   id: 983,
    //   title: 'Triple-buffered background encoding',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 252,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 3.0,
    //   category: 'Sports',
    //   seller_name: 'Kally Leiden',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 23071,
    //   auto_upload: false
    // },
    // {
    //   id: 984,
    //   title: 'Phased bottom-line functionalities',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 939,
    //   description:
    //     'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    //   rating: 4.5,
    //   category: 'Books',
    //   seller_name: 'Melli Creeber',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 68859,
    //   auto_upload: false
    // },
    // {
    //   id: 985,
    //   title: 'Compatible zero defect local area network',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 70,
    //   description:
    //     'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    //   rating: 3.5,
    //   category: 'Animal',
    //   seller_name: 'Worden Pennigar',
    //   seller_image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 20818,
    //   auto_upload: true
    // },
    // {
    //   id: 986,
    //   title: 'Organic cohesive matrices',
    //   image: 'https://i.ibb.co/2MhD8g6/VRC-image-U-F.png',
    //   price: 97,
    //   description:
    //     'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    //   rating: 4.6,
    //   category: 'Sports',
    //   seller_name: 'Sidonnie Talboy',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 62883,
    //   auto_upload: true
    // },
    // {
    //   id: 987,
    //   title: 'Horizontal context-sensitive migration',
    //   image: 'https://i.ibb.co/CsB8sxX/VRC-image-A-F.png',
    //   price: 877,
    //   description:
    //     'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 4.9,
    //   category: 'Home Decor',
    //   seller_name: 'Huberto Stears',
    //   seller_image: 'https://i.ibb.co/GFFLDBP/VRC-image-F-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 9152,
    //   auto_upload: true
    // },
    // {
    //   id: 988,
    //   title: 'Fully-configurable dedicated moratorium',
    //   image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   price: 283,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 3.9,
    //   category: 'Sports',
    //   seller_name: 'Aldric Burgin',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 21836,
    //   auto_upload: false
    // },
    // {
    //   id: 989,
    //   title: 'De-engineered eco-centric function',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 648,
    //   description:
    //     'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    //   rating: 3.5,
    //   category: 'Food',
    //   seller_name: "Staffard O'Kelly",
    //   seller_image: 'https://i.ibb.co/3dQ7ZF0/VRC-image-I-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 90168,
    //   auto_upload: false
    // },
    // {
    //   id: 990,
    //   title: 'Ergonomic tertiary methodology',
    //   image: 'https://i.ibb.co/rGQ8X8h/VRC-image-Q-M.png',
    //   price: 377,
    //   description:
    //     'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    //   rating: 4.7,
    //   category: 'Fashion',
    //   seller_name: 'Augusto Sammons',
    //   seller_image: 'https://i.ibb.co/LCp5yTc/VRC-image-P-F.png',
    //   device: 'Samsung Gear VR',
    //   polygon_amount: 74885,
    //   auto_upload: true
    // },
    // {
    //   id: 991,
    //   title: 'Compatible grid-enabled moratorium',
    //   image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   price: 128,
    //   description:
    //     'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    //   rating: 4.2,
    //   category: 'Beauty',
    //   seller_name: 'Tildi Critchard',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 37694,
    //   auto_upload: true
    // },
    // {
    //   id: 992,
    //   title: 'Persistent coherent artificial intelligence',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 683,
    //   description:
    //     'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    //   rating: 4.1,
    //   category: 'Food',
    //   seller_name: 'Erinna Edmonstone',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 62664,
    //   auto_upload: true
    // },
    // {
    //   id: 993,
    //   title: 'Exclusive regional access',
    //   image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   price: 336,
    //   description:
    //     'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    //   rating: 4.0,
    //   category: 'Toys',
    //   seller_name: 'Hubert Powys',
    //   seller_image: 'https://i.ibb.co/5BbFj6X/VRC-image-W-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 98939,
    //   auto_upload: true
    // },
    // {
    //   id: 994,
    //   title: 'Adaptive methodical policy',
    //   image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   price: 492,
    //   description:
    //     'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    //   rating: 4.4,
    //   category: 'Toys',
    //   seller_name: 'Mercy Scarfe',
    //   seller_image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   device: 'Oculus Rift',
    //   polygon_amount: 45166,
    //   auto_upload: false
    // },
    // {
    //   id: 995,
    //   title: 'Versatile eco-centric encoding',
    //   image: 'https://i.ibb.co/gJHjMPB/VRC-image-L-F.png',
    //   price: 294,
    //   description:
    //     'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    //   rating: 3.2,
    //   category: 'Sports',
    //   seller_name: 'Tally Neeves',
    //   seller_image: 'https://i.ibb.co/cwyMGpG/VRC-image-V-F.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 68913,
    //   auto_upload: true
    // },
    // {
    //   id: 996,
    //   title: 'Enterprise-wide reciprocal support',
    //   image: 'https://i.ibb.co/b6vr85m/VRC-image-D-F.png',
    //   price: 687,
    //   description:
    //     'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    //   rating: 4.2,
    //   category: 'Fashion',
    //   seller_name: 'Druci Attock',
    //   seller_image: 'https://i.ibb.co/bgmHZ9x/VRC-image-X-F.png',
    //   device: 'PlayStation VR',
    //   polygon_amount: 50974,
    //   auto_upload: false
    // },
    // {
    //   id: 997,
    //   title: 'Intuitive zero administration flexibility',
    //   image: 'https://i.ibb.co/HXw9zBn/VRC-image-M-F.png',
    //   price: 345,
    //   description:
    //     'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    //   rating: 4.6,
    //   category: 'Fashion',
    //   seller_name: 'Matty Overall',
    //   seller_image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 90143,
    //   auto_upload: true
    // },
    // {
    //   id: 998,
    //   title: 'Up-sized 24/7 capacity',
    //   image: 'https://i.ibb.co/SvKMMws/VRC-image-S-F.png',
    //   price: 680,
    //   description:
    //     'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    //   rating: 3.9,
    //   category: 'Superhero',
    //   seller_name: 'Willabella Lightoller',
    //   seller_image: 'https://i.ibb.co/kcCsHRf/VRC-image-E-M.png',
    //   device: 'Google Daydream',
    //   polygon_amount: 72609,
    //   auto_upload: true
    // },
    // {
    //   id: 999,
    //   title: 'Compatible mission-critical time-frame',
    //   image: 'https://i.ibb.co/7tL6J3x/VRC-image-K-M.png',
    //   price: 954,
    //   description:
    //     'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    //   rating: 4.7,
    //   category: 'Animal',
    //   seller_name: 'Madeline Cristou',
    //   seller_image: 'https://i.ibb.co/ykzj2pL/VRC-image-R-F.png',
    //   device: 'HTC Vive',
    //   polygon_amount: 81878,
    //   auto_upload: true
    // },
    // {
    //   id: 1000,
    //   title: 'Fully-configurable responsive framework',
    //   image: 'https://i.ibb.co/XFbxkTs/VRC-image-G-F.png',
    //   price: 175,
    //   description:
    //     'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    //   rating: 4.9,
    //   category: 'Toys',
    //   seller_name: 'Ronald Magwood',
    //   seller_image: 'https://i.ibb.co/YdTsRc3/VRC-image-H-F.png',
    //   device: 'Microsoft HoloLens',
    //   polygon_amount: 73458,
    //   auto_upload: false
    // }
  ]
}

export default data
