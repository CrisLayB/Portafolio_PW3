// src/data/games-data.js
// This file organizes all your game data based on the folder structure

// Platyfa images
import DefuseBombImg from '../img/games/_other_games/debuse_the_bomb.png'
import DefuseBombImg2 from '../img/games/_other_games/defuse_the_bomb_2.png'
import DraculaeImg from '../img/games/_other_games/draculae.png'
import ShucosImg from '../img/games/_other_games/shucos_maker.png'
import PlatyfaImg0 from '../img/games/platyfa/img_00.png'
import PlatyfaImg1 from '../img/games/platyfa/img_01.png'
import PlatyfaImg2 from '../img/games/platyfa/img_02.png'
import PlatyfaImg3 from '../img/games/platyfa/img_03.png'
import PlatyfaImg4 from '../img/games/platyfa/img_04.png'
import PlatyfaImg5 from '../img/games/platyfa/img_05.png'
import PlatyfaImg6 from '../img/games/platyfa/img_06.png'
import PlatyfaImg7 from '../img/games/platyfa/img_07.png'
import PlatyfaImg8 from '../img/games/platyfa/img_08.png'
import PlatyfaMainBg from '../img/games/platyfa/MainBackGroundV1_02.jpg'
// Procrastinate images
import ProcrastinateImg1 from '../img/games/procrastinate/img_01.png'
import ProcrastinateImg2 from '../img/games/procrastinate/img_02.png'
import ProcrastinateImg3 from '../img/games/procrastinate/img_03.png'
import ProcrastinateImg4 from '../img/games/procrastinate/img_04.png'
import ProcrastinateImg5 from '../img/games/procrastinate/img_05.png'
import ProcrastinateLevel from '../img/games/procrastinate/level_selector.png'
import ProcrastinateMain from '../img/games/procrastinate/main_title.png'
// Robotic Slaughter images
import RoboticImg0 from '../img/games/robotic_slaughter/img_0.png'
import RoboticImg1 from '../img/games/robotic_slaughter/img_01.png'
import RoboticImg2 from '../img/games/robotic_slaughter/img_02.png'
import RoboticImg3 from '../img/games/robotic_slaughter/img_03.png'
import RoboticMain from '../img/games/robotic_slaughter/main_title.png'
// Samurais vs Mongoles images
import SamuraiMain from '../img/games/samurais_vs_mongoles/SvsM.png'
import SamuraiImg1 from '../img/games/samurais_vs_mongoles/SvsM_1.png'
import SamuraiImg2 from '../img/games/samurais_vs_mongoles/SvsM_2.png'
import SamuraiImg3 from '../img/games/samurais_vs_mongoles/SvsM_3.png'
import SamuraiImg4 from '../img/games/samurais_vs_mongoles/SvsM_4.png'

// Other games

// Games data structure organized by folders
export const gamesData = [
  {
    id: 'platyfa',
    folder: 'platyfa',
    title: 'Platyfa',
    subtitle: 'Goldenfy Studios - Action Adventure',
    description:
      'An innovative action-adventure game with unique platforming mechanics, immersive storytelling, and stunning visual design. Features dynamic combat system and exploration-based gameplay.',
    longDescription:
      'Platyfa represents our flagship project at Goldenfy Studios. This action-adventure game combines traditional platforming with innovative mechanics that challenge player expectations. The game features a rich narrative, diverse environments, and a unique art style that brings the world to life.',
    status: 'In Development',
    category: 'Action/Adventure',
    platform: 'PC',
    year: '2024-2025',
    coverImage: PlatyfaImg0,
    screenshots: [
      PlatyfaImg0,
      PlatyfaImg1,
      PlatyfaImg2,
      PlatyfaImg3,
      PlatyfaImg4,
      PlatyfaImg5,
      PlatyfaImg6,
      PlatyfaImg7,
      PlatyfaImg8,
    ],
    backgroundImage: PlatyfaMainBg,
    featured: true,
    technologies: [
      'Unity',
      'C#',
      'Blender',
      'Photoshop',
      'New Input System',
      'FMOD',
      'Custom Editor Build Tools',
    ],
    team: 'Goldenfy Studios Team',
    teamSize: '6 developers and 3 musicans',
    development: {
      startDate: '2024-01',
      progress: 45,
      estimatedRelease: 'Q3 2025',
    },
    features: [
      'Dynamic Combat System',
      'Rich Narrative',
      'Unique Art Style',
      'Multiple Environments',
    ],
  },
  {
    id: 'procrastinate',
    folder: 'procrastinate',
    title: 'Procrastinate',
    subtitle: 'Productivity Puzzle Game',
    description:
      'Procrastinate is a point-and-click game where you must procrastinate without getting caught.',
    longDescription:
      'Procrastinate is a point-and-click game where your goal is to procrastinate on your tasks without being discovered. Outsmart your supervisor, find clever distractions, and balance your time to avoid getting caught while slacking off.',
    status: 'Released',
    category: 'Puzzle and Mini Games',
    platform: 'PC/Web',
    year: '2024',
    coverImage: ProcrastinateMain,
    screenshots: [
      ProcrastinateMain,
      ProcrastinateLevel,
      ProcrastinateImg1,
      ProcrastinateImg2,
      ProcrastinateImg3,
      ProcrastinateImg4,
      ProcrastinateImg5,
    ],
    backgroundImage: ProcrastinateMain,
    link: 'https://crislayb.itch.io/procrastinate', // Updated link format
    featured: true,
    technologies: ['Unity', 'C#', 'Development'],
    team: 'Goldenfy Studios Team',
    teamSize: '2 developers',
    development: {
      startDate: '2023-01',
      progress: 100,
      releaseDate: '2023-08',
    },
    features: [
      'Psychology-based Mechanics',
      'Progressive Difficulty',
      'Achievement System',
      'Funny simulations',
      'Mini Games Diversity',
    ],
  },
  {
    id: 'robotic-slaughter',
    folder: 'robotic_slaughter',
    title: 'Robotic Slaughter',
    subtitle: 'Sci-Fi Action Shooter',
    description:
      'Fast-paced action shooter featuring intense robot combat, advanced AI enemies, and adrenaline-pumping gameplay mechanics.',
    longDescription:
      'Robotic Slaughter is a high-octane action shooter that pits players against waves of robotic enemies. The game features advanced AI, destructible environments, and a variety of weapons. Developed as a university project, it showcases technical skills in AI programming and game mechanics.',
    status: 'Paused',
    category: 'Action/Shooter',
    platform: 'PC',
    year: '2019',
    coverImage: RoboticMain,
    screenshots: [RoboticMain, RoboticImg0, RoboticImg1, RoboticImg2, RoboticImg3],
    backgroundImage: RoboticMain,
    link: 'https://crislayb.itch.io/robotic-slaughter', // Updated link format
    featured: true,
    technologies: ['Unity', 'C#', 'AI Programming', 'Pixel Art', 'Photoshop'],
    team: 'Solo Project (and then Goldenfy Studios Team)',
    teamSize: '2 developers and 2 musicans',
    development: {
      startDate: '2022-03',
      progress: 50,
      completionDate: '2022-06',
    },
    features: [
      'Enemy AI',
      'Multiple Weapon Types',
      'Unique Events "Mini Games" System',
      'Wave-based Combat',
      'Score System',
      'Pixel Art 2D',
    ],
  },
  {
    id: 'samurais-vs-mongoles',
    folder: 'samurais_vs_mongoles',
    title: 'Samurais vs Mongoles',
    subtitle: 'Historical Strategy Game',
    description:
      'Epic historical strategy game featuring tactical battles between samurai warriors and mongol forces in feudal Japan.',
    longDescription:
      'This strategy game recreates the historical conflicts between samurai and mongol forces. Players command armies, manage resources, and engage in tactical battles. The game emphasizes historical accuracy while providing engaging strategic gameplay.',
    status: 'Prototype',
    category: 'Strategy/Historical',
    platform: 'PC',
    year: '2024',
    coverImage: SamuraiMain,
    screenshots: [SamuraiMain, SamuraiImg1, SamuraiImg2, SamuraiImg3, SamuraiImg4],
    backgroundImage: SamuraiMain,
    featured: false,
    technologies: ['Unity', 'C#', 'Strategy AI'],
    team: 'University Project',
    teamSize: '1 developer',
    development: {
      startDate: '2022-08',
      progress: 100,
      completionDate: '2022-12',
    },
    features: [
      'Turn-based Strategy',
      'Historical Accuracy',
      'Unit Management',
      'Tactical Combat',
      'Campaign Mode',
    ],
  },
  {
    id: 'defuse-the-bomb',
    folder: '_other_games',
    title: 'Defuse the Bomb',
    subtitle: 'Puzzle/Arcade Game',
    description:
      'Intense puzzle game where players must defuse complex bombs under extreme time pressure using logic and quick thinking.',
    longDescription:
      'Developed during a hackathon, this game challenges players to defuse increasingly complex bombs. Each level presents unique puzzle mechanics and time constraints, creating a thrilling experience that tests both logic and reflexes.',
    status: 'Completed',
    category: 'Puzzle/Arcade',
    platform: 'PC',
    year: '2025',
    coverImage: DefuseBombImg2,
    screenshots: [DefuseBombImg, DefuseBombImg2],
    backgroundImage: DefuseBombImg2,
    link: 'https://darielvilla.itch.io/defuse-the-bombs', // Updated link format
    featured: false,
    technologies: ['Unity', 'C#', 'Development'],
    team: 'Hackathon Project',
    teamSize: '1 developer',
    development: {
      startDate: '2021-10',
      progress: 100,
      completionDate: '2021-10',
      developmentTime: '48 hours',
    },
    features: [
      'Time-based Puzzles',
      'Progressive Difficulty',
      'Optimized',
      'Leaderboard System',
      'Quick Play Mode',
    ],
  },
  {
    id: 'draculae',
    folder: '_other_games',
    title: 'Draculae',
    subtitle: 'Multiplayer',
    description: `You're stealing gold in a cave with your partner when you realize there's a massive dragon right next to you! But it's still asleep.`,
    longDescription: `You're stealing gold in a cave with your partner when you realize there's a massive dragon right next to you! But it's still asleep.`,
    status: 'Prototype',
    category: 'Adventure',
    platform: 'PC',
    year: '2025',
    coverImage: DraculaeImg,
    screenshots: [DraculaeImg],
    backgroundImage: DraculaeImg,
    link: 'https://crislayb.itch.io/draculae', // Updated link format
    featured: false,
    technologies: ['Unity', 'C#', 'Development'],
    team: 'Hackathon Project',
    teamSize: '5 developer',
    development: {
      startDate: '2021-05',
      progress: 100,
      status: 'On Hold',
    },
    features: [
      'Atmospheric Horror',
      'Dynamic Lighting',
      'Audio-driven Gameplay',
      'Gothic Art Style',
      'Narrative Focus',
    ],
  },
  {
    id: 'shucos-maker',
    folder: '_other_games',
    title: 'Shucos Maker',
    subtitle: 'Cultural Cooking Simulation',
    description:
      'Fun cooking simulation game celebrating traditional Guatemalan street food culture with authentic recipes and cooking mechanics.',
    longDescription:
      'Shucos Maker is a cultural project that celebrates Guatemalan street food tradition. Players learn to prepare traditional shucos while experiencing the vibrant culture. The game combines education with entertainment, promoting cultural awareness.',
    status: 'Paused',
    category: 'Simulation/Cultural',
    platform: 'PC/VR',
    year: '2022',
    coverImage: ShucosImg,
    screenshots: [ShucosImg],
    backgroundImage: ShucosImg,
    featured: false,
    technologies: [
      'Unity',
      'C#',
      'Cultural Research',
      'VR Development',
      'Blender',
      'Oculus Integration',
    ],
    team: 'Simulation Project',
    teamSize: '1 developer',
    development: {
      startDate: '2022-06',
      progress: 100,
      completionDate: '2023-10',
    },
    features: [
      'Authentic Recipes',
      'Cultural Education',
      'Cooking Mechanics',
      'Local Ingredients',
      'Traditional Music',
    ],
  },
]

// Content configurations for each game
const gameContentConfigurations = {
  platyfa: {
    contentSections: [
      {
        type: 'hero',
        data: {
          showVideo: false,
          showGallery: true,
          galleryType: 'carousel',
        },
      },
      {
        type: 'overview',
        data: {
          showTechnicalSpecs: true,
          showTeamInfo: true,
          showDevelopmentTimeline: true,
        },
      },
      {
        type: 'features',
        data: {
          displayStyle: 'cards',
          showIcons: true,
        },
      },
      {
        type: 'development',
        data: {
          showProgress: true,
          showTimeline: true,
          showChallenges: true,
        },
      },
      {
        type: 'gallery',
        data: {
          layout: 'masonry',
          showCaptions: true,
        },
      },
      {
        type: 'code-showcase',
        data: {
          showCodeSnippets: true,
          codeLanguage: 'csharp',
          showArchitecture: true,
        },
      },
    ],
    customContent: {
      challenges: [
        'Implementing dynamic combat system with fluid animations',
        'Creating seamless level transitions',
        'Optimizing performance for complex environments',
        'Balancing exploration with linear narrative progression',
      ],
      developmentHighlights: [
        'Custom editor tools development',
        'Advanced shader programming',
        'Multi-platform optimization',
        'Procedural environment generation',
      ],
      artStyleInfo: {
        concept: 'Unique blend of realistic environments with stylized character design',
        influences: ['Studio Ghibli animations', 'Ori and the Blind Forest', 'Hollow Knight'],
        techniques: ['Hand-painted textures', 'Dynamic lighting', 'Particle effects'],
      },
      codeSnippets: [
        {
          title: 'Third Person Movement',
          language: 'csharp',
          description: 'Movement for the main character Gaus',
          code: `using System.Collections;
using UnityEngine;
using Cinemachine;

public enum Camerastyle
{
    Exploration,
    Combat
}

public class ThirdPersonMovement : MonoBehaviour, IDamageable
{
    private GatherInput _gInput;
    
    [SerializeField] private CharacterController controller;    
    private float speed;
    private int _life = 5;

    [Header("Reference")]
    [SerializeField] private Transform player;
    [SerializeField] private Transform orientation;

    [Header("Camera")]
    [SerializeField] private Camera mainCamera;
    [SerializeField] private Transform _camera;
    [SerializeField] private GameObject explorationCam;
    [SerializeField] private GameObject combatCam;
    [SerializeField] private float turnSmoothTime = 0.1f; 
    [SerializeField] private Camerastyle currentStyle;        
    private CinemachineFreeLook _cinemachineExploration;
    private CinemachineFreeLook _cinemachineCombat;
    // [SerializeField] private Transform combatLookAt;

    [Header("Zoom")]
    [SerializeField] private CinemachineFreeLook _cameraZoom;
    [SerializeField] private float normalFOV = 40f;
    [SerializeField] private float zoomedFOV = 20f;
    [SerializeField] private float zoomSpeed = 10f;
    // bool isZoomed = false; 

    [Header("Movement")]
    [SerializeField] private float walkingSpeed = 8f;
    [SerializeField] private float sprintSpeed = 20f;
    [SerializeField] private float defenseSpeed = 2f;
    private bool _isRunning = false;
    private float _horizontal = 0f;
    private float _vertical = 0f;
 
    float turnSmoothVelocity;

    [Header("Jump")]
    [SerializeField] private float jumpHeight = 3f;
    [SerializeField] private float gravity = -9.81f;
    Vector3 velocity;
    [SerializeField] private Transform groundCheck;
    [SerializeField] private float groundDistance = 0.4f;
    [SerializeField] private LayerMask groundMask;
    private bool isGrounded;

    [Header("Attack")]
    [SerializeField] private Transform attackSphere;
    [SerializeField] private LayerMask _enemyLayers;
    [SerializeField] private float attackRange = 1f;        

    [Header("Invulnerable Effect")]
    [SerializeField] private float _effectDuration = 3f;
    [SerializeField] private SkinnedMeshRenderer _characterRenderer;
    [SerializeField] private MeshRenderer _armCharacterRenderer;
    [SerializeField] private Color _invulnerableColor = Color.gray;
    private Color _originalColorCharacter;
    private Color _originalColorArm;
    private bool _invulnerable = false;
    public bool Invulnerable { get { return _invulnerable;} }
    
    public int Health { get; set; }
    
    // ? ===>  Private Attributes
    private bool isInDefense = false;    
    
    // private Vector3 lastCameraForward;
    private Quaternion lastCameraRotation;

    // Animation Connection
    private GausAnimations _animations;
    
    public bool IsRunning { get { return _isRunning; }}
    public bool IsGrounded { get { return isGrounded; }}
    public bool IsInDefense { get { return isInDefense; }}

    private void Awake()
    {
        _gInput = GetComponent<GatherInput>();
    }

    private void Start() 
    {
        _animations = GetComponent<GausAnimations>();

        _cinemachineExploration = explorationCam.GetComponent<CinemachineFreeLook>();
        _cinemachineCombat = combatCam.GetComponent<CinemachineFreeLook>();
        
        Cursor.visible = false;
        Cursor.lockState = CursorLockMode.Locked;
        _originalColorCharacter = _characterRenderer.material.color;
        _originalColorArm = _armCharacterRenderer.material.color;
        Health = _life;
        // lastCameraForward = explorationCam.transform.forward;
        lastCameraRotation = explorationCam.transform.rotation;        
    }

    private void OnDrawGizmosSelected()
    {
        if (attackSphere == null)
            return;

        Gizmos.DrawWireSphere(attackSphere.position, attackRange);
    }

    // Update is called once per frame
    private void Update()
    {               
        if(!GameManager.Instance.Playing) return;
        
        if(GameManager.Instance.Paused) return;
        
        // Ground Check
        isGrounded = Physics.CheckSphere(groundCheck.position, groundDistance, groundMask);
        if(isGrounded && velocity.y < 0)
        {
            velocity.y = -2f; // A small downward force to ensure the character stays grounded
        }
        
        HandleInputs();
        Movement();        
        SprintLogic();
        // DefenseLogic();
        // ControlGunLookAt();
    }

    private void HandleInputs()
    {        
        //Jump -space        
        if(_gInput.Jump && isGrounded)
        {
            velocity.y = Mathf.Sqrt(jumpHeight * -2f * gravity);            
            GameManager.Instance.PlayerDataUpdate(PlayerDataEnum.jumps);
            AudioManager.Instance?.PlayOneShot(FMODEvents.instance.gaussJump, transform.position);
            _animations.Jumping();
            _gInput.ResetJump();
        }
        velocity.y += gravity * Time.deltaTime;        
        controller.Move(velocity * Time.deltaTime);

        //Crouch -ctrl
        if(_gInput.Attack)
        {
            StartCoroutine(Attack());
            _gInput.ResetAttack();
        }

        // Hide Cursor When Click is presed
        if((Cursor.visible || Cursor.lockState == CursorLockMode.None) && GameManager.Instance.Playing)
        {
            if(_gInput.Shoot || _gInput.Sight)
            {
                Cursor.visible = false;
                Cursor.lockState = CursorLockMode.Locked;
            }
        }
    }

    private void SprintLogic()
    {
        if(isInDefense) return;

        if(_gInput.Run) _isRunning = !_isRunning;

        if(_horizontal < 0.5f && _horizontal > -0.5f && _vertical < 0.5f && _vertical > -0.5f)
        {
            _isRunning = false;
        }
        
        speed = _isRunning ? sprintSpeed : walkingSpeed; 
        _gInput.ResetRun();
    }

    private void Movement()
    {
        Vector2 movement = _gInput.Movement;
        _horizontal = movement.x;
        _vertical = movement.y;

        // Camera Style Controll
        if (currentStyle == Camerastyle.Exploration)
        {            
            Vector3 direction = new Vector3(_horizontal, 0f, _vertical).normalized;

            if (direction.magnitude >= 0.1f)
            {
                float targetAngle = Mathf.Atan2(direction.x, direction.z) * Mathf.Rad2Deg + _camera.eulerAngles.y;
                float angle = Mathf.SmoothDampAngle(transform.eulerAngles.y, targetAngle, ref turnSmoothVelocity, turnSmoothTime);
                transform.rotation = Quaternion.Euler(0f, angle, 0f);

                Vector3 moveDir = Quaternion.Euler(0f, targetAngle, 0f) * Vector3.forward;
                controller.Move(moveDir.normalized * speed * Time.deltaTime);
            }            
        }

        else if (currentStyle == Camerastyle.Combat)
        {
            // Combat mode movement: Directly behind the player, player a bit to the left of screen
            Vector3 direction = transform.forward * _vertical + transform.right * _horizontal;

            if (direction.magnitude >= 0.1f)
            {
                Vector3 moveDir = direction.normalized;
                controller.Move(moveDir * speed * Time.deltaTime);
            }

            // Optionally, adjust the player's rotation to align with the camera's forward direction
            // This is if you want the player to always face the same direction as the camera in combat mode
            Vector3 forward = _camera.forward;
            forward.y = 0; // Keep the player rotation _horizontal
            transform.rotation = Quaternion.LookRotation(forward);                        
        }

        _animations.RuningAnimation(_isRunning);
        _animations.WalkingAnimation(_horizontal != 0 || _vertical != 0);
        _animations.JumpingInStop(!isGrounded);
    }
    
    public void SwitchCameraStyle(Camerastyle newStyle)
    {
        // Store the current camera's forward direction before switching
        if (currentStyle == Camerastyle.Exploration)
        {
            // lastCameraForward = explorationCam.transform.forward;
            lastCameraRotation = explorationCam.transform.rotation;
        }
        else if (currentStyle == Camerastyle.Combat)
        {
            // lastCameraForward = combatCam.transform.forward;
            lastCameraRotation = combatCam.transform.rotation;
        }

        if (newStyle == Camerastyle.Exploration)
        {
            explorationCam.SetActive(true);
            combatCam.SetActive(false);
            // Apply the stored camera rotation to the new active camera
            explorationCam.transform.rotation = lastCameraRotation;
        }
        else if (newStyle == Camerastyle.Combat)
        {
            float xValueToSet = _cinemachineExploration.m_XAxis.Value;            
                        
            explorationCam.SetActive(false);
            combatCam.SetActive(true);
            // Apply the stored camera rotation to the new active camera

            if(newStyle != currentStyle) _cinemachineCombat.m_XAxis.Value = xValueToSet;         
            combatCam.transform.rotation = lastCameraRotation;
        }

        currentStyle = newStyle;
    }

    private IEnumerator Attack()
    {        
        Collider[] hitEnemies = Physics.OverlapSphere(attackSphere.position, attackRange, _enemyLayers);
        GameManager.Instance.PlayerDataUpdate(PlayerDataEnum.frequency_melee_attack);

        foreach (Collider enemyColl2D in hitEnemies)
        {
            IDamageable enemyImpact = enemyColl2D.GetComponent<IDamageable>();
            if(enemyImpact != null)
            {
                GameManager.Instance.PlayerDataUpdate(PlayerDataEnum.impact_melee_attack);
                enemyImpact.TakeDamage(1);
            }
        }

        AudioManager.Instance?.PlayOneShot(FMODEvents.instance.gaussClaws, transform.position);
        _animations.Garrotazo();
        yield return new WaitForSeconds( 1.0f );        
    }

    public void TakeDamage(int pDamage)
    {
        int damage = Health - pDamage;

        if (damage > 0 && !_invulnerable)
        {
            Health = damage;
            StartCoroutine(InvulnerabilityEffect());
            GameManager.Instance.PlayerDataUpdate(PlayerDataEnum.damage_received);
        }

        if(damage <= 0)
        {
            Health = 0;            
            GameManager.Instance.GameOver();            
            Cursor.visible = true;
            Cursor.lockState = CursorLockMode.None;
            _animations.KO();
        }
    }

    private IEnumerator InvulnerabilityEffect()
    {
        _invulnerable = true;
        _characterRenderer.material.color = _invulnerableColor;
        _armCharacterRenderer.material.color = _invulnerableColor;
        yield return new WaitForSeconds(_effectDuration);
        _characterRenderer.material.color = _originalColorCharacter;
        _armCharacterRenderer.material.color = _originalColorArm;
        _invulnerable = false;
    }
}`,
        },
        {
          title: 'Food Box',
          language: 'csharp',
          description: 'Functionallity for the Food Box (The arm of the main character Gaus)',
          code: `using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Cinemachine;
using UnityEngine.Events;

[Serializable]
public struct Munitions
{
    public GameObject bulletPrefab;
    [Range(0, 100)] public int maximunAmmo;
    [Range(0, 100)] public int ammo;
    public Texture2D textureForFoodBox;
    [Range(0.1f, 1.0f)] public float shootRate;
}

[RequireComponent(typeof(ThirdPersonMovement))]
public class FoodBox : MonoBehaviour
{
    private GatherInput _gInput;

    [SerializeField] private List<Munitions> _bulletPrefabs;
    [SerializeField] float bulletVelocity = 30;
    [SerializeField] float bulletPrefabLifetime = 3f;
    [SerializeField] private Transform bulletSpawn;
    [SerializeField] private Renderer objRenderer;
    [SerializeField] private float maxRange = 100f;
    [SerializeField] private bool infiniteMunition = false;
    [SerializeField] private Mira mira;

    // Checkers for Important Attributes from SerializeField
    public bool LookExists () => mira;
    public bool RendererExists () => objRenderer;
    
    private Texture _originalTextureFoodBox;
    private MunitionDisplay _ammunitionDisplay;

    private MunitionType _bulletSelected = MunitionType.BARRINGTONIA;

    // For Change Bullets from the controller    
    private float crossThreshold = 0.1f; // Define the threshold for the axis    
    private float _canShoot = -1f;    

    private PlayerDataEnum[] _bulletsTypeRegister = new PlayerDataEnum[5]; // Register Data

    public MunitionType BulletSelected() => _bulletSelected;

    private Munitions _MuntionSelected { get { return _bulletPrefabs[(int)_bulletSelected]; }}

    private ThirdPersonMovement _player;
    private GausAnimations _animations;

    private Camera activeCamera;
    private Vector3 targetPoint;
    
    [Space]
    [Header("Bulls Eye Events")]
    [SerializeField] private UnityEvent bullsEyeDetected;
    [SerializeField] private UnityEvent bullsEyeFree;
        
    private void Awake()
    {
        _gInput = GetComponent<GatherInput>();
    }
        
    // Start is called before the first frame update
    private void Start()
    {        
        CinemachineBrain brainCamera = Camera.main.GetComponent<CinemachineBrain>();

         if (brainCamera != null)
        {
            brainCamera.m_CameraActivatedEvent.AddListener(OnCameraChanged);
        }
        else
        {
            Debug.LogError("CinemachineBrain not found on Main Camera!");
        }

        _player = GetComponent<ThirdPersonMovement>();
        _animations = GetComponent<GausAnimations>();

        if(_player == null) Debug.LogError("FoodBox.cs error: ThirdPersonMovement not found.");
        if(_animations == null) Debug.LogError("FoodBox.cs error: Gaus Animations not found.");
        
        // Start Bullets Type Register
        _bulletsTypeRegister[0] = PlayerDataEnum.frequency_barringtonia;
        _bulletsTypeRegister[1] = PlayerDataEnum.frequency_spaggetti;
        _bulletsTypeRegister[2] = PlayerDataEnum.frequency_jelly;
        _bulletsTypeRegister[3] = PlayerDataEnum.frequency_hot_tea;
        _bulletsTypeRegister[4] = PlayerDataEnum.frequency_cake;

        _ammunitionDisplay = FindObjectOfType<MunitionDisplay>();

        if(_bulletPrefabs.Count > 0)
        {
            _originalTextureFoodBox = objRenderer.material.mainTexture;
            ChangeTextureAndMaterialFoodBox();
        }
    }

    private void Update() 
    {
        ChangeBulletType();
        ChangeBulletWitKeys();
        ControlAim();        
    }

    private void ControlAim()
    {                
        bool aimButton = _gInput.Sight;

        if(aimButton) /// Activar Mira
        {
            _animations?.ShootAnimation(true);
            _player?.SwitchCameraStyle(Camerastyle.Combat);
            ControlShootInAimMode();
            if (!mira.isActive) mira.Show();
            return;
        }

        _animations?.ShootAnimation(false);
        _player?.SwitchCameraStyle(Camerastyle.Exploration);
        if(mira.isActive) mira.Hide();
    }

    private void ControlShootInAimMode() 
    {        
        if(_player == null) return;
        
        if(_player.IsInDefense) return;
                                
        bool shotButton = _gInput.Shoot;
                
        bool shootPressed = shotButton && Time.time > _canShoot;
    
        if(shootPressed && AmmoIsEnough())
        {
            // Play sound of munition empty
            return;
        }

        Ray ray = activeCamera.ViewportPointToRay(new Vector3(0.5f, 0.5f, 0));
                
        if (Physics.Raycast(ray, out RaycastHit hit, maxRange))
        {
            Shotable shotableTarget = hit.collider.GetComponent<Shotable>();
            
            if (shotableTarget != null)
            {
                targetPoint = hit.point;
                Debug.DrawLine(ray.origin, hit.point, Color.cyan, 2f);
                bullsEyeDetected.Invoke();
            }
            else
            {
                // targetPoint = hit.collider.transform.position;
                targetPoint = ray.origin + ray.direction * maxRange;
                bullsEyeFree.Invoke();
            }
        }
        else
        {
            targetPoint = ray.origin + ray.direction * maxRange;
            // Debug.DrawLine(ray.origin, targetPoint, Color.blue, 2f);
            bullsEyeFree.Invoke();
        }
                
        // Instantiate Bullet
        if (shootPressed)
        {       
            _animations?.ShootAnimation(true);                
            _canShoot = Time.time + _MuntionSelected.shootRate;
            Shoot();
        }
    }

    private void Shoot()
    {        
        Vector3 bulletDirection = (targetPoint - bulletSpawn.position).normalized;

        GameObject bullet = Instantiate(_bulletPrefabs[(int)_bulletSelected].bulletPrefab, 
                                        bulletSpawn.position, Quaternion.identity);

        Rigidbody rb = bullet.GetComponent<Rigidbody>();
        if (rb != null)
        {
            rb.velocity = bulletDirection * bulletVelocity;
            Debug.DrawLine(bulletSpawn.position, bulletSpawn.position + bulletDirection * maxRange, Color.yellow, 2f);
        }

        StartCoroutine(DestroyBulletAfterTime(bullet, bulletPrefabLifetime));
        Munitions munition = _bulletPrefabs[(int)_bulletSelected];

        if(!infiniteMunition) munition.ammo--;

        if(munition.ammo <= 0) 
        {
            munition.ammo = 0;
            objRenderer.material.mainTexture = _originalTextureFoodBox;
        }
        
        _bulletPrefabs[(int)_bulletSelected] = munition;
        _ammunitionDisplay.AmmoText(munition.ammo, munition.maximunAmmo);

        if (munition.ammo == 0)
        {
            objRenderer.material.mainTexture = _originalTextureFoodBox;
        }

        AudioManager.Instance?.PlayOneShot(FMODEvents.instance.foodArmShootNormal, transform.position);
    }


    void OnDestroy()
    {
        CinemachineBrain brainCamera = Camera.main.GetComponent<CinemachineBrain>();
        if (brainCamera != null)
        {
            brainCamera.m_CameraActivatedEvent.RemoveListener(OnCameraChanged);
        }
    }
    
    private void ChangeBulletType()
    {                
        float scrollAxis = _gInput.ScrollAxis;
        bool changingNext = _gInput.ChangeMunitionNext;
        bool changingPrevious = _gInput.ChangeMunitionBefore;
                
        if (scrollAxis > 0f || changingNext)
        {
            _bulletSelected++;
            if ((int)_bulletSelected >= _bulletPrefabs.Count)
                _bulletSelected = 0;

            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();            
            mira.UpdateColor((int)_bulletSelected);

            _gInput.ResetChangeMunitionNext();
        }

        else if (scrollAxis < 0f || changingPrevious)
        {
            _bulletSelected--;
            if ((int)_bulletSelected < 0)
                _bulletSelected = (MunitionType)(_bulletPrefabs.Count - 1);

            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();        
            mira.UpdateColor((int)_bulletSelected);

            _gInput.ResetChangeMunitionBefore();
        }        
    }

    private void ChangeBulletWitKeys()
    {        
        if (Input.GetKeyDown(KeyCode.Keypad1))
        {
            _bulletSelected = MunitionType.BARRINGTONIA;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }
        else if (Input.GetKeyDown(KeyCode.Keypad2) && _bulletPrefabs.Count >= 2)
        {
            _bulletSelected = MunitionType.SPAGGETTI;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }
        else if (Input.GetKeyDown(KeyCode.Keypad3) && _bulletPrefabs.Count >= 3)
        {
            _bulletSelected = MunitionType.JELLY;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }
        else if (Input.GetKeyDown(KeyCode.Keypad4) && _bulletPrefabs.Count >= 4)
        {
            _bulletSelected = MunitionType.HOT_TEA;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }
        else if (Input.GetKeyDown(KeyCode.Keypad5) && _bulletPrefabs.Count >= 5)
        {
            _bulletSelected = MunitionType.CAKE;
            _ammunitionDisplay.ChangeAmmo((int)_bulletSelected);
            mira.UpdateColor((int)_bulletSelected);
            ChangeTextureAndMaterialFoodBox();
        }                
    }

    private void ChangeTextureAndMaterialFoodBox()
    {        
        _ammunitionDisplay.AmmoText(_MuntionSelected.ammo, _MuntionSelected.maximunAmmo);
        objRenderer.material.mainTexture = _MuntionSelected.ammo > 0 ? _MuntionSelected.textureForFoodBox : _originalTextureFoodBox;
    }

    private void OnCameraChanged(ICinemachineCamera incomingCamera, ICinemachineCamera outgoingCamera)
    {
        Debug.Log($"Camera changed: Incoming = {incomingCamera?.Name}, Outgoing = {outgoingCamera?.Name}");

        // Update active camera if necessary
        activeCamera = CinemachineCore.Instance.GetActiveBrain(0)?.OutputCamera;

        if (activeCamera != null)
        {
            Debug.Log($"Active camera updated: {activeCamera.name}");
        }
    }

    private IEnumerator DestroyBulletAfterTime(GameObject bullet, float delay)
    {
        yield return new WaitForSeconds(delay);
        Destroy(bullet);
    }

    public void AddMoreMunition(MunitionType munitionSelected, int amount)
    {
        if((int)munitionSelected > _bulletPrefabs.Count)
        {
            print("Munition Selected Not Avaliable");
            return;
        }
        
        Munitions munition = _bulletPrefabs[(int)munitionSelected];
        munition.ammo += amount;
        
        if(munition.ammo > munition.maximunAmmo) munition.ammo = munition.maximunAmmo;

        _bulletPrefabs[(int)munitionSelected] = munition;
        
        _ammunitionDisplay.AmmoText(_MuntionSelected.ammo, _MuntionSelected.maximunAmmo);
        AudioManager.Instance?.PlayOneShot(FMODEvents.instance.brokeMunitionBox, transform.position);
        if(_MuntionSelected.ammo > 0) objRenderer.material.mainTexture = _MuntionSelected.textureForFoodBox;
    }

    public bool AmmoIsEnough() => _bulletPrefabs[(int)_bulletSelected].ammo <= 0;

    public void ReturnToNormalMunition() => infiniteMunition = false;
}`,
        },
        {
          title: 'Bullet',
          language: 'csharp',
          description: 'Main structure for the funcionallity of all munition of the game',
          code: `using System.Collections;
using System.Collections.Generic;
using System.Net.Http.Headers;
using UnityEngine;

public class Bullet : MonoBehaviour
{   
    [Header("Bullet Special Effects Properties")]
    [SerializeField] private GameObject _munitionObject;
    [SerializeField] private float _speedRotation;
    [SerializeField] private Vector3 _rotationVectors;
    private Rigidbody _rb;

    
    private void Start() 
    {
        if(!_munitionObject) Debug.LogError("Bullet.cs: Munition Object is null.");

        _rb = GetComponent<Rigidbody>();
        if(_rb == null) Debug.LogError("Bullet.cs: Rigidbody is null.");
    }
    
    // Update is called once per frame
    void Update()
    {
        if(!_munitionObject) return;
        
        _munitionObject.transform.Rotate(
            Mathf.Sin(_rotationVectors.x) * _speedRotation,  
            Mathf.Sin(_rotationVectors.y) * _speedRotation, 
            Mathf.Sin(_rotationVectors.z) * _speedRotation,
            Space.Self
        );
    }

    public void RandomizeDirection(float speedMultiplier = 1f)
    {
        if (_rb == null) return;
                
        Vector3 randomDirection = Random.insideUnitSphere.normalized;        
        _rb.velocity = randomDirection * _rb.velocity.magnitude * speedMultiplier;
    }
}`,
        },
        {
          title: 'Game Manager',
          language: 'csharp',
          description: 'Main template for the correctly functionallity of the game',
          code: `using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.EventSystems;

public abstract class GameManager : MonoBehaviour
{
    private static GameManager _instance;
    public static GameManager Instance
    {
        get
        {
            if (_instance == null)
                Debug.LogError("GameManager.cs error: The instance is Null");

            return _instance;
        }
    }

    [Header("Game Manager Properties")]
    protected Dictionary<PlayerDataEnum, int> sessionData = new Dictionary<PlayerDataEnum, int>();
    [SerializeField] private GameObject _gameOverUIPanel;
    [SerializeField] private GameObject _stageClearUIPanel;
    [SerializeField] private GameObject _HUD;

    protected LevelEnum _currentLevel;
    [SerializeField] private GameObject _gameOverUIPanelObjects;
    [SerializeField] private LevelEnum currentLevel;
    private bool _playing = true;

    private bool _dataSaved;
    [SerializeField] private GameObject _pauseMenuPanel;
    [SerializeField] private GameObject firstButtonGameOver;
    private bool _isPaused = false;

    public bool Playing { get { return _playing; }}
    public bool Paused { get { return _isPaused;}}

    private GatherInput _gInput;

    private void Awake() 
    {
        _gInput = FindObjectOfType<GatherInput>();       

        if(_gInput == null) Debug.LogError("Error: GatherInput is null");
        
        Time.timeScale = 1.0f;
        _instance = this;

        foreach (PlayerDataEnum playerdataEnum in Enum.GetValues(typeof(PlayerDataEnum)))
        {
            sessionData.Add(playerdataEnum, 0);
        }
    }

    private void Start()
    {
        _dataSaved = false;

        if(_gameOverUIPanel == null)
        {
            Debug.LogError("GameManager.cs: Game Over UI Panel is Null.");
        } else
        {
            _gameOverUIPanel.SetActive(false);
        }

        if (_pauseMenuPanel == null)
        {
            Debug.LogError("GameManager.cs: Pause Menu UI Panel is Null");
        } else
        {
            _pauseMenuPanel.SetActive(false);
        }

        if (_stageClearUIPanel == null) {
            Debug.LogError("GameManager.cs: Stage Clear Panel is Null");
        } else {
            _stageClearUIPanel.SetActive(false);
        }

        if (_HUD == null) {
            Debug.LogError("GameManager.cs: Stage Clear Panel is Null");
        } else {
            _HUD.SetActive(true);
        }

        Initialize();
    }

    public virtual void Update()
    {        
        bool isPausePressed = _gInput.PauseButtonPressed;
        
        if (_gInput != null && isPausePressed)  // Nueva propiedad en GatherInput
        {
            PauseGame();
        }

        if(_gInput != null && !_playing && _stageClearUIPanel.activeSelf && isPausePressed)
        {
            PlatyfaSceneManager.Instance.LoadLevel2Prototype();
        }
    }

    public void PauseGame()
    {
        GatherInput input = FindObjectOfType<GatherInput>();  // Buscar la instancia de GatherInput
        if (input == null) return;

        _isPaused = !_isPaused;
        input.SetPauseState(_isPaused);

        if (_isPaused)
        {
            Time.timeScale = 0;
            _pauseMenuPanel.SetActive(true);
            Cursor.visible = true;
            Cursor.lockState = CursorLockMode.None;
        }
        else
        {
            Time.timeScale = 1.0f;
            _pauseMenuPanel.SetActive(false);
            Cursor.visible = false;
            Cursor.lockState = CursorLockMode.Locked;
        }
    }

    public void GameOver()
    {
        if(!_playing) return;
        
        Debug.Log("GAME OVER");
        _playing = false;

        _gameOverUIPanel.SetActive(true);
        RectTransform _maskRectTransform = _gameOverUIPanel.transform.Find("Mask")?.GetComponent<RectTransform>();

        if (_maskRectTransform != null)
            _maskRectTransform.LeanScale(new Vector3(0, 0, 0), 2f);
        
        Transform objectsPanelTransform = _gameOverUIPanel.transform.Find("ObjectsPanel");
        StartCoroutine(TemporalGameOver());    
        AudioManager.Instance?.InitializeMusic(FMODEvents.instance.musicGameOver);
        EventSystem.current.SetSelectedGameObject(null);
        EventSystem.current.SetSelectedGameObject(firstButtonGameOver);
    }

    public void StageClear() {
        Debug.Log("STAGE CLEAR");
        Cursor.visible = true;
        Cursor.lockState = CursorLockMode.None;
        _playing = false;

        _HUD.SetActive(false);
        _stageClearUIPanel.SetActive(true);

        RectTransform potRectTransform = _stageClearUIPanel.transform.Find("pot")?.GetComponent<RectTransform>();
        RectTransform pipesTopRectTransform = _stageClearUIPanel.transform.Find("pipesTop")?.GetComponent<RectTransform>();
        GameObject titleObject = _stageClearUIPanel.transform.Find("Title")?.gameObject;
        RectTransform titleRectTransform = _stageClearUIPanel.transform.Find("Title")?.GetComponent<RectTransform>();
        RectTransform timerRectTransform = _stageClearUIPanel.transform.Find("timer")?.GetComponent<RectTransform>();

        if (potRectTransform != null && pipesTopRectTransform != null)
        {
            // Posiciones finales
            Vector3 potTargetPos = new Vector3(0, 0, 0); // Top-left corner
            Vector3 pipesTopTargetPos = new Vector3(0, 0, 0); // Bottom-right corner

            LeanTween.move(potRectTransform, potTargetPos, 1f).setEase(LeanTweenType.easeInOutQuad);
            LeanTween.move(pipesTopRectTransform, pipesTopTargetPos, 1f).setEase(LeanTweenType.easeInOutQuad);
        }

        if (titleRectTransform != null && timerRectTransform != null) {
            // Animate Title sliding in from the right
            LeanTween.move(titleRectTransform, Vector3.zero, 1f).setEase(LeanTweenType.easeOutQuad);
            LeanTween.move(timerRectTransform, Vector3.zero, 1f).setEase(LeanTweenType.easeOutQuad);
        }

        StartCoroutine(ProvisionalThanksScene());
    }

    private IEnumerator ProvisionalThanksScene()
    {
        yield return new WaitForSeconds(70f);
        PlatyfaSceneManager.Instance.LoadLevel2Prototype();
    }

    protected abstract void Initialize();

    private IEnumerator TemporalGameOver()
    {  
        _gameOverUIPanelObjects.SetActive(true);  
        yield return new WaitForSeconds(3f);
        _gameOverUIPanelObjects.transform.Find("HatAndGoogles")?.gameObject.SetActive(true); 
        // Time.timeScale = 0.0f;
        RectTransform gameOverTitle = _gameOverUIPanelObjects.transform.Find("GameOverText")?.gameObject.GetComponent<RectTransform>(); 
        if (gameOverTitle != null) {
            LeanTween.move(gameOverTitle, new Vector3(390, 110, 0f), 1f).setEase(LeanTweenType.easeOutQuad);
        }
        yield return new WaitForSeconds(1.5f);
        _gameOverUIPanelObjects.transform.Find("GameOverButtons")?.gameObject.SetActive(true); 
    }
    
    public void PlayerDataUpdate(PlayerDataEnum playerData)
    {
        sessionData[playerData] = sessionData[playerData] + 1;
    }
}`,
        },
      ],
    },
  },

  procrastinate: {
    contentSections: [
      {
        type: 'hero',
        data: {
          showVideo: false,
          showGallery: true,
          galleryType: 'carousel',
        },
      },
      {
        type: 'overview',
        data: {
          showTechnicalSpecs: true,
          showTeamInfo: true,
          showDevelopmentTimeline: false,
        },
      },
      {
        type: 'psychology-design',
        data: {
          showResearch: true,
          showUserTesting: true,
        },
      },
      {
        type: 'code-showcase',
        data: {
          showCodeSnippets: true,
          codeLanguage: 'csharp',
          showArchitecture: true,
        },
      },
      {
        type: 'features',
        data: {
          displayStyle: 'list',
          showIcons: false,
        },
      },
    ],
    customContent: {
      codeSnippets: [
        {
          title: 'Object Hover Action',
          language: 'csharp',
          description: 'Functionally for make work the principal tasks and activities',
          code: `using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
public abstract class ObjectHover : MonoBehaviour
{
    [Header("Object Hover Attributes")]
    [SerializeField] private ManagerBase _manager;
    [SerializeField] private Texture2D hoverPointerTexture;
    [SerializeField] private Color colorHover = Color.green;
    private Color _color;
    private Renderer _renderer;
    private bool _canHover;

    // Escential Abstract Methods
    protected abstract void Action();

    protected virtual void Start()
    {
        _renderer = GetComponent<Renderer>();
        _color = _renderer.material.color;        

        if(hoverPointerTexture == null) Debug.LogError("ObjectHover.cs error: Hover Pointer Texture is Null");

        if(_manager == null) Debug.LogError("ObjectHover.cs error: Manager is Null");
    }

    protected virtual void Update()
    {
        _canHover = _manager.CanPlay;
    }

    private void OnMouseEnter()
    {
        if(!_canHover) return;
        
        Cursor.SetCursor(hoverPointerTexture, Vector2.zero, CursorMode.Auto);
        _renderer.material.color = colorHover;
    }

    private void OnMouseExit()
    {
        Cursor.SetCursor(null, Vector2.zero, CursorMode.Auto);
        _renderer.material.color = _color;
    }

    private void OnMouseDown() 
    {
        if(!_canHover) return;
        
        Action();
    }

    public void setCanHover(bool availability)
    {
        _canHover = availability;
    }
}`,
        },
        {
          title: 'Manager Base for Procrastination',
          language: 'csharp',
          description:
            'Abstract class for adapt this base to the rest of the classes of the rest of the levels',
          code: `using System.Collections;
using System.Collections.Generic;
using TMPro;
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;
using UnityEngine.UI;

public abstract class ManagerBase : MonoBehaviour
{
    [Header("Manager Main Attributes")]
    [SerializeField] private GameObject _uiPanelVictory;
    [SerializeField] private GameObject _uiPanelGameOver;
    [SerializeField] private GameObject _uiPanelPause;
    [SerializeField] private GameObject _uiPanelInstructions;
    [SerializeField] private Slider _pointsSlider;
    [SerializeField] private float _incrementRate = 0.14f;        
    [SerializeField] protected Timer _timer;
    [SerializeField] private Animator[] _starts;
    [SerializeField] private Animator _lostLifePanelAnimator;
    [SerializeField] Image _star1;
    [SerializeField] Image _star2;
    [SerializeField] Image _star3;
    [SerializeField] Sprite _Star_Big_Full;
    [SerializeField] TMP_Text _victoryText;

    // Protected Variables for Use in the children Classes
    protected Life _lifeUi;    
    protected bool pausedGame = false;

    // Only for administrate in the parent class
    private List<AudioSource> _audiosPlayedBeforePause = new List<AudioSource>();
    private int _life = 3;
    private float _points = 0f;
    private float _maxPoints = 1.0f;
    private float _pointsIncrement = 0.01f;
    private float _canIncrementPoints = -1f;    
    private bool _canPlay = false;
    private bool _finishedGame = false;

    public bool CanPlay
    {
        get { return _canPlay; }
    }

    protected virtual void Start()
    {
        _lifeUi = GameObject.FindObjectOfType<Life>();

        if(_uiPanelVictory == null)
            Debug.LogError("ManagerBase.cs error: Ui Panel Victory is null");

        if(_uiPanelGameOver == null)
            Debug.LogError("ManagerBase.cs error: Ui Panel Game Over is null");

        if(_pointsSlider == null)
            Debug.LogError("ManagerBase.cs error: Points Slider is null");

        if(_lifeUi == null)
            Debug.LogError("ManagerBase.cs error: Life UI is null");
        else
            _lifeUi.ChangeLife(_life);
        
        if(_timer == null)
            Debug.LogError("ManagerBase.cs error: Timer is null");

        if(_starts.Length != 3)
            Debug.LogError("ManagerBase.cs error: You need to set three starts");

        if(_lostLifePanelAnimator == null)
            Debug.LogError("ManagerBase.cs error: Lost Life Panel Animation is null");
        
        Time.timeScale = 0f;
        _uiPanelVictory.SetActive(false);
        _uiPanelGameOver.SetActive(false);
        _uiPanelInstructions.SetActive(true);
        AudioListener.pause = false;
    }

    protected virtual void Update()
    {
        if(_timer.TimeUp) 
        {
            ActiveUIPanelVictory();
        }

        if (Input.GetKeyDown(KeyCode.Escape))
        {
            PauseGame();
        }
    }

    protected void WinPoints()
    {
        if(_points <= _maxPoints && Time.time > _canIncrementPoints)
        {
            _canIncrementPoints = Time.time + _incrementRate;
            _points += _pointsIncrement;

            if(_points >= 1f)
            {
                _points = 1f;
            }

            CheckStarsUpdates();
        }
    }

    protected void WinExtraPoints()
    {
        if (_points <= _maxPoints && Time.time > _canIncrementPoints)
        {
            _points += 0.2f;
            Debug.Log("puntoss");
            CheckStarsUpdates();
        }
    }

    public void LostLife()
    {
        _lifeUi.ChangeLife(--_life);
        _points -= 0.20f;

        if(_points <= 0f)
        {
            _points = 0f;
        }
        
        CheckStarsUpdates();    
        ShakeCameras();    
        _lostLifePanelAnimator.SetTrigger("loseLife");

        if(_life <= 0)
        {
            ActiveUIPanelGameOver();            
            return;
        }
    }

    private void ShakeCameras()
    {
        CameraShake[] camerasWithShakeScript = FindObjectsOfType<CameraShake>();
        foreach(CameraShake cameraToShake in camerasWithShakeScript)
        {
            StartCoroutine(cameraToShake.Shake(0.5f, 0.15f));
        }
    }

    private void CheckStarsUpdates()
    {
        _pointsSlider.value = _points;

         // Stars Activation
        _starts[0].SetBool("activeStar", _points > 0.26f);
        _starts[1].SetBool("activeStar", _points > 0.60f);
        _starts[2].SetBool("activeStar", _points > 0.95f);
    }

    private void ActiveUIPanelVictory()
    {
        if(_finishedGame) return;        
        Time.timeScale = 0f;
        if (_star1 != null && _star2 != null && _star3 != null)
        {
            if (_points > 0.26f) _star1.sprite = _Star_Big_Full;
            if (_points > 0.60f) _star2.sprite = _Star_Big_Full;
            if (_points > 0.95f) _star3.sprite = _Star_Big_Full;
        }
        if (_victoryText != null)
        {
            if (_points > 0.26f) _victoryText.text = "Procrastinador Principiante";
            if (_points > 0.60f) _victoryText.text = "Procrastinador Promedio";
            if (_points > 0.95f) _victoryText.text = "Procrastinador Experto";
        }
        _uiPanelVictory.SetActive(true);
        _finishedGame = true; 
        AudioListener.pause = true;
    }

    private void ActiveUIPanelGameOver()
    {
        if(_finishedGame) return;        
        Time.timeScale = 0f;
        _uiPanelGameOver.SetActive(true);
        _finishedGame = true;
    }

    public virtual void PauseGame()
    {        
        if (pausedGame) 
        {
            // resume game
            pausedGame = false;
            Time.timeScale = 1.0f;
            _uiPanelPause.SetActive(false);

            foreach (AudioSource audio in _audiosPlayedBeforePause)
            {
                audio.Play();
            }
            _audiosPlayedBeforePause.Clear();

            StartCoroutine(StartGame());
        } 
        else 
        {
            // pause game
            pausedGame = true;
            Time.timeScale = 0f;
            _uiPanelPause.SetActive(true);

            AudioSource[] audios = FindObjectsOfType<AudioSource>();
            foreach (AudioSource audio in audios) 
            {
                if (audio.isPlaying)
                {
                    audio.Pause();
                    _audiosPlayedBeforePause.Add(audio);
                }
            }

            _canPlay = false;
        }
    }

    public void InitGame()
    {
        _uiPanelInstructions.SetActive(false);
        Time.timeScale = 1.0f;
        StartCoroutine(StartGame());
    }

    private IEnumerator StartGame()
    {
        _canPlay = false;
        yield return new WaitForSeconds(0.1f);
        _canPlay = true;
    }
}`,
        },
        {
          title: 'Game Manager Level 1 Example',
          language: 'csharp',
          description: 'Game Manager for Level1 in base with the script ManagerBase',
          code: `using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Video;

public class ManagerL1 : ManagerBase
{        
    public static ManagerL1 instance = null;
    
    protected void Awake()
    {
        if(instance == null)
        {
            instance = this;
            return;
        }

        Destroy(gameObject);
    }

    [Header("Manager For Level 1 Attributes")]
    [SerializeField] protected GameObject _uiButtonReturn;
    
    [SerializeField] private GameObject _cameraMain; 
    [SerializeField] private GameObject _cameraTv;
    [SerializeField] private GameObject _cameraTvForSeeLaptop;    
    [SerializeField] private VideoPlayer _videoPlayer;
    [SerializeField] private VideoClip[] _videosClips;
    [SerializeField] private GameObject _volumeTvGameObject;
    private Slider _volumeTvSlider;
    private int _numberLastVideoSelected = -1;

    public bool ActiveCameraTv
    {
        get { return _cameraTv.activeSelf; }
    }
    
    protected override void Start()
    {
        base.Start();
        
        if(_cameraMain == null)
            Debug.LogError("ManagerL1.cs error: Camera Main is null");

        if(_cameraTv == null)
            Debug.LogError("ManagerL1.cs error: Camera Tv is null");

        if(_cameraTvForSeeLaptop == null)
            Debug.LogError("ManagerL1.cs error: Camera Tv For See Laptop is null");

        if(_videoPlayer == null)
            Debug.LogError("ManagerL1.cs error: Video Player is null");

        if(_uiButtonReturn == null)
            Debug.LogError("ManagerL1.cs error: Ui Button Return is null");

        if(_volumeTvGameObject == null)
            Debug.LogError("ManagerL1.cs error: Volume Tv GameObject is null");
        else
        {
            _volumeTvSlider = _volumeTvGameObject.GetComponent<Slider>();
        }

        if(_volumeTvSlider == null)
            Debug.LogError("ManagerL1.cs error: Volume Tv Slider is null");
    }

    protected override void Update()
    {
        base.Update();
        if(_cameraTv.activeSelf && !base.pausedGame) WinPoints();

        if(_volumeTvGameObject.activeSelf)
        {
            _videoPlayer.SetDirectAudioVolume(0, _volumeTvSlider.value);
        }
    }
    
    public void ChangeCameraView()
    {
        _cameraMain.SetActive(!_cameraMain.activeSelf);
        _cameraTv.SetActive(!_cameraTv.activeSelf);
        _volumeTvGameObject.SetActive(!_volumeTvGameObject.activeSelf);
        _uiButtonReturn.SetActive(!_uiButtonReturn.activeSelf);
        if(_cameraTv.activeSelf)
        {
            _videoPlayer.SetDirectAudioVolume(0, 0.25f);
            _videoPlayer.Play();
        }
        else
            _videoPlayer.Pause();
        _volumeTvSlider.value = 0.25f;

        if(_cameraTv.activeSelf) ChangeVideo();
    }
    
    public void OnCameraForSeeLaptop()
    {
        if(!_cameraTv.activeSelf) return;
        
        _cameraTvForSeeLaptop.SetActive(true);
    }

    public void OffCameraForSeeLaptop()
    {        
        _cameraTvForSeeLaptop.SetActive(false);
    }

    private void ChangeVideo()
    {
        if(_videosClips.Length <= 0) return;

        int choosedVideo = Random.Range(0, _videosClips.Length);

        if(choosedVideo == _numberLastVideoSelected) return;

        _videoPlayer.clip = _videosClips[choosedVideo];
        _numberLastVideoSelected = choosedVideo;
    }

    public override void PauseGame()
    {
        base.PauseGame();

        _videoPlayer.SetDirectAudioVolume(0, !pausedGame ? 0.25f : 0f);
        _volumeTvSlider.value = 0.25f;
        
        // Avoid Conflict between videos and pause.
        if(pausedGame && !_cameraTv.activeSelf) 
            _videoPlayer.Pause();
        else if(pausedGame && _cameraTv.activeSelf)
            _videoPlayer.Pause();
        else if(!pausedGame && !_cameraTv.activeSelf)
            _videoPlayer.Pause();
        else if(!pausedGame && _cameraTv.activeSelf)
            _videoPlayer.Play();
    }
}`,
        },
      ],
    },
  },

  'robotic-slaughter': {
    contentSections: [
      {
        type: 'hero',
        data: {
          showVideo: false,
          showGallery: true,
          galleryType: 'carousel',
        },
      },
      {
        type: 'overview',
        data: {
          showTechnicalSpecs: true,
          showTeamInfo: true,
          showDevelopmentTimeline: true,
        },
      },
      {
        type: 'ai-showcase',
        data: {
          showAICode: true,
          showBehaviorTrees: true,
          showPerformanceMetrics: true,
        },
      },
      {
        type: 'code-showcase',
        data: {
          showCodeSnippets: true,
          codeLanguage: 'csharp',
          showArchitecture: true,
        },
      },
    ],
    customContent: {
      codeSnippets: [
        {
          title: 'Main Character Actions',
          language: 'csharp',
          description: 'All the actions functionallity for the main character',
          code: `using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D), typeof(CapsuleCollider2D))]
public class Adal : MonoBehaviour
{
    // ===> Properties Of Character
    [SerializeField] private float _movementSpeed = 5.0f;
    [SerializeField] private float _jumpForce = 14.0f;
    [SerializeField] private float _shootRate = 0.14f;
    [SerializeField] private float _jetpackSpeed = 3f;
    [SerializeField] private Transform HitBoxSword, _bombDirection, _bombObjetive;
    [SerializeField] private float _swordRate = 0.45f;
    [SerializeField] private float attackRange = 1f;
    [SerializeField] private LayerMask enemyLayers;
    [SerializeField] private float _lauchBombForce;
    [SerializeField] private float _bombRate = 0.45f;
    private int bombStateLaunch = -1;

    // ===> Prefabs
    [SerializeField] private GameObject _bulletPrefab;
    [SerializeField] private GameObject _bombPrefab;
    [SerializeField] private GameObject _pointPrefab;
    [SerializeField] private int _numberOfPoints;
    
    // ===> Private Properties for the gameplay
    [SerializeField] private int _life = 4;
    private int _defaultLife = 4;
    [SerializeField] private int _bullets = 175;
    [SerializeField] private int _limit_bullets = 250;
    
    // ===> Private thechnical Properties
    private bool _lookAhead = true;
    private bool _checkInvulnerable = false;
    private bool _win = false;
    private bool _death = false;
    private bool _stop = false;
    private float _canShoot = -1f;
    private float _canSwording = -1f;
    private float _canThrowBomb = -1f;
    private float _fallDeath = -6f;
    private GameObject[] _points;
    private Vector2 _direction;

    // ===> Vectors for Box Collider 2D
    private Vector2 _v2OffsetOriginal = new Vector2(-0.08f, 0.0f);
    private Vector2 _v2SizeOriginal = new Vector2(0.82f, 2.03f);
    private Vector2 _v2OffsetCrunched = new Vector2(-0.08f, -0.4f);
    private Vector2 _v2SizeCrunched = new Vector2(0.82f, 1.23f);

    // ===> Components of the Protagonist
    private Rigidbody2D _rigidbody2D;
    private Animator _animator;
    private CapsuleCollider2D _capsuleCollider2D;
    private Renderer _renderer;
    private Color _color;

    // ===> Comunication with the managers
    private LifeBar _uiLifeBar;
    private BulletsUI _uiBulletsUi;
    
    private void Start()
    {
        _rigidbody2D = GetComponent<Rigidbody2D>();
        _animator = GetComponent<Animator>();
        _capsuleCollider2D = GetComponent<CapsuleCollider2D>();    
        _uiLifeBar = FindObjectOfType<LifeBar>();
        _uiBulletsUi = FindObjectOfType<BulletsUI>();
        _renderer = GetComponent<Renderer>();
        _color = _renderer.material.color;

        if(_uiLifeBar == null) Debug.LogError("Adal.cs error: Life Bar Not Found");
        else _uiLifeBar.ChangeLife(_life);
        if(_uiBulletsUi == null) Debug.LogError("Adal.cs error: Bullets UI Not Found");
        else _uiBulletsUi.UpdateBulletsCount(_bullets);

        if(_bulletPrefab == null) Debug.LogError("Error from 'Protagonist.cs': Life Bar is NULL.");
        if(_bombDirection == null) Debug.LogError("Adal.cs error: Transform of Bomb is Null");

        if(_pointPrefab == null) Debug.LogError("Adal.cs error: Point Prefab is Null.");
        else InitializeTrajectoryOfBomb();

        // Check If Will be Charged
        _stop = false;
        StateMiniGameEvent state = IlusionEventManager.Instance.GetStateMiniGameEvent();

        switch (state)
        {
            case StateMiniGameEvent.Win:
                SetPosition(IlusionEventManager.Instance.PlayerPosition);
                break;

            case StateMiniGameEvent.Lose:
                ResetAdal();
                break;

            default:
                break;
        }
    }

    private void InitializeTrajectoryOfBomb()
    {
        _points = new GameObject[_numberOfPoints];

        for(int i = 0; i < _numberOfPoints; i++)
        {
            _points[i] = Instantiate(_pointPrefab, transform.position, Quaternion.identity);
        }

        seeTrajectoryPoints(false);
    }
    
    private void Update()
    {
        ControlsGamePlay();
        StatusPlayerChecking();
    }

    public void StopPlayer()
    {
        _stop = true;
        _rigidbody2D.velocity = Vector2.zero;
        _animator.SetBool("isMoving", false);
        _animator.SetBool("isJumping", false);
        _animator.SetBool("isCrounchedDown", false);        
        _animator.SetFloat("isJetActive", 0f);
        _animator.SetFloat("isShooting", 0f);
        _animator.SetBool("isDeath", false);
    }

    private void OnDrawGizmosSelected() 
    {
        if (HitBoxSword == null)
            return;
        
        Gizmos.DrawWireSphere(HitBoxSword.position, attackRange);
    }

    private void seeTrajectoryPoints(bool state)
    {
        for(int i = 0; i < _points.Length; i++)
        {
            _points[i].SetActive(state);
        }
    }    

    private void ControlsGamePlay()
    {
        if(_win)
        {
            _animator.SetBool("isWin", true);
            _rigidbody2D.velocity = new Vector2(0f, _rigidbody2D.velocity.y);
            return;
        }

        if(_stop)
        {
            _rigidbody2D.velocity = new Vector2(0f, _rigidbody2D.velocity.y);
            return;
        }

        if(_life == 0 && !_death) 
        {
            _death = true;
            _animator.SetBool("isDeath", true);            
            bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;
            _animator.SetBool("isJumping", !isGrounded);
            StartCoroutine(DeathDesition());
            return;
        }
        
        if(_life <= 0) return;

        // Player Controllers and Actions
        MovementHorizontal();
        VerticalControll();
        Jump();
        SwordAttack();
        Shoot();
        Jet();
        ThrowBomb();
    }

    private void StatusPlayerChecking()
    {
        // ===> If the player falls
        if(transform.position.y < _fallDeath && !_death){
            _life = 0;
            _death = true;
            _uiLifeBar.ChangeLife(_life);
            _rigidbody2D.velocity = new Vector2(0f, _rigidbody2D.velocity.y);
            AudioManager.Play(AudioClipName.death);
            StartCoroutine(DeathDesition());
        }
    }
    
    private void MovementHorizontal()
    {        
        float horizontalInput = Input.GetAxis("Horizontal");

        if(horizontalInput > 0) _lookAhead = true;        
        else if(horizontalInput < 0) _lookAhead = false;

        transform.localScale = new Vector2(_lookAhead ? 1 : -1, 1);

        if(bombStateLaunch == -1)
            _rigidbody2D.velocity = new Vector2(horizontalInput * _movementSpeed, _rigidbody2D.velocity.y);

        _animator.SetBool("isMoving", horizontalInput != 0);
    }

    private void VerticalControll()
    {
        float verticalInput = Input.GetAxis("Vertical");
        bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;

        if(verticalInput < -0.60f && isGrounded)
        {
            _rigidbody2D.velocity = new Vector2(0.0f, _rigidbody2D.velocity.y);
            IdleCrounchedPosition(true, _v2OffsetCrunched, _v2SizeCrunched);
            return;
        }

        IdleCrounchedPosition(false, _v2OffsetOriginal, _v2SizeOriginal);
    }

    private void IdleCrounchedPosition(bool isCrounched, Vector2 v2Offset, Vector2 v2Size)
    {
        _animator.SetBool("isCrounchedDown", isCrounched);
        _capsuleCollider2D.offset = v2Offset;
        _capsuleCollider2D.size = v2Size;
    }

    private void Jump()
    {
        bool jumpInput = Input.GetButtonDown("Jump");
        bool jumpInputReady = Input.GetButtonUp("Jump");
        bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;

        if(jumpInput && isGrounded)
        {
            _rigidbody2D.velocity = new Vector2(0, _jumpForce);
            AudioManager.Play(AudioClipName.jump_11);
        }

        if(jumpInputReady && _rigidbody2D.velocity.y > 0) 
            _rigidbody2D.velocity = new Vector2(0, 0);

        _animator.SetBool("isJumping", !isGrounded);
    }

    private void SwordAttack()
    {
        bool isAtackOfSword = Input.GetButtonDown("Atack");

        if(isAtackOfSword && Time.time > _canSwording && Input.GetAxis("Vertical") > -0.60f)
        {
            _canSwording = Time.time + _swordRate;

            Collider2D[] hitEnemies = Physics2D.OverlapCircleAll(HitBoxSword.position, attackRange, enemyLayers);

            // Hacerles daño a los enemigos
            foreach (Collider2D enemy in hitEnemies)
            {
                enemy.GetComponent<EnemyBase>()?.TakeSwordDamage();
                enemy.GetComponent<Meteor>()?.ReboundMeteor();
            }

            _animator.SetBool("isSwordAtack", true);
            AudioManager.Play(AudioClipName.laser7);
            return;
        }

        _animator.SetBool("isSwordAtack", false);
    }

    private void Shoot()
    {
        float shootInput = Input.GetAxis("Shoot");
        bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;

        if(shootInput > 0.02f && _bullets > 0 && Time.time > _canShoot)
        {
            _canShoot = Time.time + _shootRate;
            float positionXForBullet = _lookAhead ? 1.2f : -1.2f;
            float positionYForBullet =  Input.GetAxis("Vertical") < -0.60f && isGrounded ? -0.45f : 0.03f;
            Vector3 vectorForBullet =  transform.position + new Vector3(positionXForBullet, positionYForBullet, 0f);
            Quaternion rotForBullet = Quaternion.Euler(0, 0, _lookAhead ? 0.0f : 180.0f);
            Instantiate(_bulletPrefab, vectorForBullet, rotForBullet);
            _bullets--;
            _uiBulletsUi.UpdateBulletsCount(_bullets);
        }

        _animator.SetFloat("isShooting", shootInput);
        AudioContinueSoundManager.instance?.PlayContinueSound("shoot", shootInput > 0.02f && _bullets > 0);
    }

    private void Jet()
    {
        float jetInput = Input.GetAxis("JetMove");
                
        if(jetInput > 0.02f && Input.GetAxis("Shoot") < 0.01f)
        {
            _rigidbody2D.velocity = new Vector2(
                Input.GetAxis("Horizontal") * _jetpackSpeed * _movementSpeed, _rigidbody2D.velocity.y
            );
        }
        
        _animator.SetFloat("isJetActive", jetInput);
    }

    private void ThrowBomb()
    {
        bool bombThrow = Input.GetButton("ThrowBomb");
        bool isGrounded = Mathf.Abs(_rigidbody2D.velocity.y) < 0.01f;

        _animator.SetBool("isThrowBomb", bombThrow);

        if(bombThrow && isGrounded && Time.time > _canThrowBomb)
        {
            _rigidbody2D.velocity = new Vector2(0f, _rigidbody2D.velocity.y);

            bombStateLaunch = 0;            
            
            _direction = _bombObjetive.position - _bombDirection.position;

            seeTrajectoryPoints(true);

            for(int i = 0; i < _points.Length; i++)
            {
                _points[i].transform.position = PointPosition(i * 0.1f);
            }
        }

        if(!isGrounded) // Cancel Atack
        {
            bombStateLaunch = -1;
            seeTrajectoryPoints(false);
        }

        if(bombThrow == false && bombStateLaunch == 0 && isGrounded)        
        {
            bombStateLaunch = 1;
            seeTrajectoryPoints(false);
        }

        if(bombThrow == false && bombStateLaunch == 1)
        {            
            _canThrowBomb = Time.time + _bombRate;
            bombStateLaunch = -1;
            GameObject bomb = Instantiate(_bombPrefab, _bombDirection.position, _bombDirection.rotation);
            float pos = _lookAhead ? _lauchBombForce : -_lauchBombForce;
            bomb.GetComponent<Rigidbody2D>().velocity = transform.right * pos;      
        }
    }

    public void Damage()
    {
        if(_life <= 0) return;

        _uiLifeBar.ChangeLife(--_life);
    }

    public void RecoverLife()
    {
        if(_life >= 4) return;

        _uiLifeBar.ChangeLife(++_life);
    }

    public void RecoverBullets(int amountBullets)
    {
        _bullets = ((_bullets + amountBullets) > _limit_bullets) ? _limit_bullets : _bullets + amountBullets;
        _uiBulletsUi.UpdateBulletsCount(_bullets);
    }

    public void GameWinned()
    {
        _win = true;
    }
    
    private void OnCollisionEnter2D(Collision2D other) 
    {        
        if(!_checkInvulnerable && (other.gameObject.tag.Equals("Enemy") || other.gameObject.tag.Equals("Laser")))
        {
            _uiLifeBar.ChangeLife(--_life);

            if(_life > 0)
            {                
                AudioManager.Play(AudioClipName.hit1);
                StartCoroutine("Hurted");
                StartCoroutine("GetInvulnerable");      
            }
            
            if(_life == 0)
                AudioManager.Play(AudioClipName.death);
        }        
    }

    Vector2 PointPosition(float t)
    {
        return (Vector2)_bombObjetive.position + (_direction.normalized * _lauchBombForce * t) + 0.5f * Physics2D.gravity * (t * t);
    }

    IEnumerator Hurted()
    {        
        _rigidbody2D.velocity = Vector2.zero;
                                
        Vector2 vector2d = _lookAhead ? new Vector2(-2000f, 500f) : new Vector2(2000f, 500f);
        _rigidbody2D.AddForce(vector2d);

        yield return new WaitForSeconds(0.5f);
    }

    IEnumerator GetInvulnerable()
    {                                
        _color.a = 0.5f;
        _renderer.material.color = _color;
        _checkInvulnerable = true;
        yield return new WaitForSeconds(1.5f);
        _checkInvulnerable = false;
        _color.a = 1f;
        _renderer.material.color = _color;
    }

    private IEnumerator DeathDesition()
    {
        yield return new WaitForSeconds(3.5f);
        ResetAdal();
    }

    public void ResetAdal()
    {
        _rigidbody2D.velocity = Vector2.zero;
        _life = _defaultLife;
        _death = false;
        _uiLifeBar.ChangeLife(_life);
        _animator.SetTrigger("relive");
        Vector2 pos = Manager.instance.BeginInTheLastCheckPointMarked();
        SetPosition(pos);
        _animator.SetBool("isDeath", false);
    }

    public void SetPosition(Vector2 position)
    {
        transform.position = new Vector2(position.x, position.y);
    }
}`,
        },
        {
          title: 'AI Enemy Base',
          language: 'csharp',
          description: 'The main class template for make work the another enemies of the game',
          code: `using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class EnemyBase : MonoBehaviour
{
    #region ---> Atributos/Fields <---

    //****************************************************************
    private static int hurtBullet = 1;
    private static int hurtSword = 30;
    private static int hurtBomb = 50;
    //****************************************************************
    
    [SerializeField] private int life;
    [SerializeField] protected float speed = 2f;
    [SerializeField] protected Transform objetive;
    [SerializeField] private float distanceForAtack = 18f;    
    [SerializeField] protected Transform proyectileDirection;
    // Get Prefabs
    [SerializeField] private GameObject prefabExplosion;
    [SerializeField] private GameObject bulletsMunition, heartMunition;
    
    // Attributes for Use
    protected Vector2 playerFromAI;
    protected float finalDistanceForAtack = 0f;
    protected bool position;
    protected Rigidbody2D theRigidbody;

    // Private Attributes
    private Animator animator;
    private string currentAnimation;
    private Renderer _render2D;
    private Color colorDefault;
    private Color colorDamage = Color.red;    

    #endregion

    #region ---> Metodos Abstractos/Abstracts Methods <---

    protected abstract void Initialize();
    protected abstract void Movement();
    protected abstract void EnemyActions();
    
    #endregion

    # region ---> Metodos/Methods <---

    /// <summary>
    /// Start is llamado cuendo el script esta habilitado y se ejecuta
    /// antes del primer frame 
    /// </summary>
    void Start() 
    {
        animator = GetComponent<Animator>();
        _render2D = GetComponent<Renderer>();
        theRigidbody = GetComponent<Rigidbody2D>();

        if(distanceForAtack < 0) Debug.LogError("EnemyBase.cs error: Distance For Atack not must be negative numbers");
        
        if(objetive == null) Debug.LogError("EnemyBase.cs error: Objetive Transform is Null");
               
        if(animator == null) Debug.LogError("EnemyBase.cs error: Animator is Null");

        if(bulletsMunition == null) Debug.LogError("EnemyBase.cs error: BulletsMunition gameobject dont found");

        if(_render2D == null) Debug.LogError("EnemyBase.cs: Error, dont found _render2D component");
        else colorDefault = _render2D.material.color;

        if(theRigidbody == null) Debug.LogError("EnemyBase.cs error: Rigidbody is Null");

        Initialize();
    }

    /// <summary>
    /// Update es llamado por cada frame
    /// </summary>
    void Update()
    {        
        CheckLife(); // Para revisar la vida del enemigo constantemente
        Movement(); // Para darle movimiento al personaje
        Munition(); // Dar municion Ya sea balas o vida
        EnemyActions(); // Dar acciones al enemigo
        playerFromAI = objetive.position - transform.position;
        finalDistanceForAtack = playerFromAI.x < 0 ? -distanceForAtack : distanceForAtack;
    }
        
    /// <summary>
    /// Sent when another object enters a trigger collider attached to this
    /// object (2D physics only).
    /// </summary>
    /// <param name="other">The other Collider2D involved in this collision.</param>
    private void OnTriggerEnter2D(Collider2D other)
    {
        // Cuando recibe daño de una bala
        if(other.gameObject.CompareTag("Bullet"))
        {
            life -= hurtBullet;              
            Destroy(other.gameObject);
            StartCoroutine("GettingDamage");
        }
    }

    private void OnCollisionEnter2D(Collision2D other) 
    {
        DamageBomb(other);
    }

    protected void DamageBomb(Collision2D other)
    {
        if(other.gameObject.CompareTag("Bomb"))
        {
            life -= hurtBomb;                          
            StartCoroutine("GettingDamage");
        }
    }

    IEnumerator GettingDamage()
    {
        _render2D.material.color = colorDamage;
        yield return new WaitForSeconds(0.1f);
        _render2D.material.color = colorDefault;
    }
       
    /// <summary>
    /// Definir el daño que sufrira los enemigos.
    /// </summary>
    public void TakeSwordDamage()
    {
        life -= hurtSword;
        StartCoroutine("GettingDamage");
    }

    /// <summary>
    /// Revisar constantemente la vida del enemigo
    /// </summary> 
    private void CheckLife()
    {
        if(life <= 0)
        {
            AudioManager.Play(AudioClipName.Explosion);
            Instantiate(prefabExplosion, transform.position, Quaternion.identity);
            Destroy(this.gameObject);
        }
    }

    /// <summary>
    /// Soltar munición para el jugador
    /// </summary>
    private void Munition()
    {
        if(life <= 0)
        {            
            int luckNum = Random.Range(1, 10);

            if (luckNum < 3 && bulletsMunition != null)
                Instantiate(bulletsMunition, transform.position, bulletsMunition.transform.rotation);

            if (luckNum > 7 && heartMunition != null)
                Instantiate(heartMunition, transform.position, heartMunition.transform.rotation);
        }
    }

    protected void LookToObjetive()
    {
        transform.localScale = new Vector2(playerFromAI.x < 0 ? 1 : -1, 1);        
    }

    /// <summary>
    /// Cambiar de animación por medio de estados de animación
    /// </summary>
    /// <param name="newAnimation">Nombre de la nueva animación a llamar</param>
    protected void ChangeAnimationState(string newAnimation)
    {
        if(currentAnimation == newAnimation) return;

        animator.Play(newAnimation);
        currentAnimation = newAnimation;
    }

    #endregion
}`,
        },
        {
          title: 'First Enemy',
          language: 'csharp',
          description: 'Script of the first enemy programmed',
          code: `using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy01AI : EnemyBase
{
    #region ---> Atributos/Fields <---

    [SerializeField] private GameObject _laser_I_prefab;
    [SerializeField] private GameObject _laser_D_prefab;
    [SerializeField] private float _spawnTime;
    [SerializeField] private float _distanceForFollow = 12f;

    // Private Attributes
    private float counter;
    private float _finalDistanceForFollow = 0f;

    // Estados de animacion
    const string ENEMY_WALK = "Move_Enemy01";
    const string ENEMY_ATTACK = "Atack_Enemy01";

    # endregion

    # region ---> Override Methods <---

    protected override void Initialize()
    {
        if(_laser_I_prefab == null) Debug.LogError("Enemy01AI.cs error: Laser I Prefab is null");
        if(_laser_D_prefab == null) Debug.LogError("Enemy01AI.cs error: Laser D Prefab is null");
    }

    protected override void Movement()
    {
        _finalDistanceForFollow = playerFromAI.x < 0 ? -_distanceForFollow : _distanceForFollow;

        bool left = playerFromAI.x < 0 && playerFromAI.x > _finalDistanceForFollow && playerFromAI.x <= finalDistanceForAtack;
        bool right = playerFromAI.x > 0 && playerFromAI.x < _finalDistanceForFollow && playerFromAI.x >= finalDistanceForAtack;

        if(left || right)
            FollowObjetive();   
    }

    protected override void EnemyActions()
    {
        LookToObjetive();

        bool left = playerFromAI.x < 0 && playerFromAI.x > finalDistanceForAtack;
        bool right = playerFromAI.x > 0 && playerFromAI.x < finalDistanceForAtack;

        if(left || right)
            ShootLaser();
        else
            counter = 0; 
    }

    #endregion

    #region ---> Private Methods <---

    /// <summary>
    /// Disparar depende de la posición de este mismo
    /// </summary>
    private void ShootLaser()
    {
        counter += Time.deltaTime;
        ChangeAnimationState(ENEMY_ATTACK);
        
        if(counter > _spawnTime)
        {
            CreateLaser(playerFromAI.x > 0 ? _laser_D_prefab : _laser_I_prefab);  
            counter = 0;
        }

        theRigidbody.velocity = new Vector2(0f, theRigidbody.velocity.y);
    }

    /// <summary>
    /// Crear laser tirado por el enemigo 01
    /// </summary>
    /// <param name="laser">El Laser para acomodarlo depende de su posición</param>
    private void CreateLaser(GameObject laser)
    {
        AudioManager.Play(AudioClipName.fire3);
        Vector3 pos = transform.position + new Vector3(0, 0.7f, 0);
        Instantiate(laser, pos, laser.transform.rotation);
    }

    private void FollowObjetive()
    {
        float directionToGo = playerFromAI.x < 0 ? -1f : 1f;
        theRigidbody.velocity = new Vector2(directionToGo * speed, theRigidbody.velocity.y);
        ChangeAnimationState(ENEMY_WALK);
    }

    #endregion
}`,
        },
      ],
      aiFeatures: [
        'Dynamic pathfinding with NavMesh and obstacle avoidance',
        'Behavioral state machines with smooth transitions',
        'Group AI coordination and communication systems',
        'Adaptive difficulty scaling based on player performance',
        'Memory system for last known player positions',
        'Line of sight detection with raycasting',
        'Predictive targeting for moving players',
      ],
      technicalAchievements: [
        '60 FPS with 50+ concurrent AI agents',
        'Real-time pathfinding optimization',
        'Custom behavior tree implementation',
        'Memory-efficient state management',
      ],
    },
  },

  'samurais-vs-mongoles': {
    contentSections: [
      {
        type: 'hero',
        data: {
          showVideo: false,
          showGallery: true,
          galleryType: 'carousel',
        },
      },
      {
        type: 'overview',
        data: {
          showTechnicalSpecs: true,
          showTeamInfo: true,
          showDevelopmentTimeline: true,
        },
      },
      {
        type: 'features',
        data: {
          displayStyle: 'cards',
          showIcons: true,
        },
      },
      {
        type: 'code-showcase',
        data: {
          showCodeSnippets: true,
          codeLanguage: 'csharp',
          showArchitecture: true,
        },
      },
    ],
    customContent: {
      codeSnippets: [
        {
          title: 'Samurai (Player)',
          language: 'csharp',
          description: 'Main Functionallity for the Samurai',
          code: `using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Samurai : MonoBehaviour
{
    // ===> Atributes
    [Header("Walk Settings")]
    [SerializeField] private float _walkSpeed;
    [Header("Attack of Sword Settings")]
    [SerializeField] private Transform _hitBoxAttack;
    [SerializeField] private LayerMask _enemyLayers;
    [SerializeField] private float _attackRangeForHitBox = 1f;
    [SerializeField] private float _attackRate = 1.0f;
    [Header("Dodge Settings")]
    [SerializeField] private float _dodgeSpeed = 35f;
    [Header("Audio Clips For Sounds")]
    [SerializeField] private AudioClip _blockSound;
    [SerializeField] private AudioClip _attackSound;
    [SerializeField] private AudioClip _dodgeSound;
    [SerializeField] private AudioClip _damageSound;
    [SerializeField] private AudioClip _deathSound;

    // ===> Components
    private Animator _animator;
    private Rigidbody2D _rigidbody2D;
    private SpriteRenderer _sprite;
    private AudioSource _audioSource;


    // ===> private Auxiliar Atributes
    private int _life = 100;
    private float _horizontalInput = 0.0f;
    private float _verticalInput = -1.0f;
    private float _canAtack = -1.0f;
    private bool _isBlocking;
    private bool _canDodge = true;

    // Start is called before the first frame update
    void Start()
    {
        _animator = GetComponent<Animator>();
        _rigidbody2D = GetComponent<Rigidbody2D>();
        _sprite = GetComponent<SpriteRenderer>();
        _audioSource = GetComponent<AudioSource>();

        if (_audioSource == null)        
            Debug.LogError("Samurai.cs error: AudioSource is null");
        
        if (_animator == null)
            Debug.LogError("Samurai.cs error: Animator is null");
        else
            _animator.SetFloat("Y", _verticalInput); // For Set Front View from the beggining

        if (_rigidbody2D == null)
            Debug.LogError("Samurai.cs error: Animator is null");

        if (_sprite == null)
            Debug.LogError("Samurai.cs error: Animator is null");

        if (_hitBoxAttack == null)
            Debug.LogError("Samurai.cs error: Hit Box Atack is null");
    }

    // Update is called once per frame
    void Update()
    {
        if(!GameManager.Instance.StartedGame())
        {
            if(Input.GetButtonDown("Atack"))
                GameManager.Instance.GameStart();
                
            return;
        }
        
        Controlls();
    }

    private void OnDrawGizmosSelected()
    {
        if (_hitBoxAttack == null)
            return;

        Gizmos.DrawWireSphere(_hitBoxAttack.position, _attackRangeForHitBox);
    }

    //========================================================================
    //============================ PRIVATE METHODS ===========================
    //========================================================================
    private void Controlls()
    {
        // Check if Samurai Wins the Battle
        if(GameManager.Instance.Win())
        {
            _rigidbody2D.velocity = new Vector2(0f, 0f);
            _animator.SetFloat("Y", -1f);
            _animator.SetBool("isWalk", false);
            return;
        }
        
        // Check if Samurai is Death
        if (_life <= 0f || GameManager.Instance.InvassionFull())
        {
            if(_life <= 0f) _animator.SetTrigger("isDeath");
            _rigidbody2D.velocity = new Vector2(0f, 0f);
            _animator.SetTrigger("isDeath");
            _audioSource.PlayOneShot(_deathSound);
            // Carga la escena de "game over"
            StartCoroutine(TriggerGameOver());
            return;
        }

        // Call the Actions
        Walk();
        Atack();
        Block();
        Dodge();
    }

    private IEnumerator TriggerGameOver()
    {
        yield return new WaitForSeconds(2f);
        SceneManager.LoadScene("GameOverScene");
    }

    private void Walk()
    {
        _horizontalInput = Input.GetAxis("Horizontal");
        _verticalInput = Input.GetAxis("Vertical");

        _rigidbody2D.velocity = new Vector2(_isBlocking ? 0f : _horizontalInput * _walkSpeed, _isBlocking ? 0f : _verticalInput * _walkSpeed);

        // Set limit for x position
        transform.position = new Vector2(Mathf.Clamp(transform.position.x, -8.12f, 8.12f), transform.position.y);
                
        // Set limit for y position
        transform.position = new Vector2(transform.position.x, Mathf.Clamp(transform.position.y, -2.773117f, -1.673084f));

        if (_horizontalInput > 0)
            _sprite.flipX = false;

        if (_horizontalInput < 0)
            _sprite.flipX = true;

        if (_horizontalInput != 0 || _verticalInput != 0)
        {
            _animator.SetFloat("X", _horizontalInput);
            _animator.SetFloat("Y", _verticalInput);

            // Set Directions for the Hit Box of Attack
            if (_horizontalInput > 0) // Right Position
                _hitBoxAttack.position = _rigidbody2D.position + new Vector2(1.0f, 0f);

            else if (_horizontalInput < 0) // Left Position
                _hitBoxAttack.position = _rigidbody2D.position + new Vector2(-1.0f, 0f);

            else if (_verticalInput > 0) // Up Position
                _hitBoxAttack.position = _rigidbody2D.position + new Vector2(0f, 1.0f);

            else if (_verticalInput < 0) // Down Position
                _hitBoxAttack.position = _rigidbody2D.position + new Vector2(0f, -1.0f);
        }

        _animator.SetBool("isWalk", _horizontalInput != 0 || _verticalInput != 0);
    }

    private void Atack()
    {
        bool atackInput = Input.GetButtonDown("Atack");

        if (atackInput && Time.time > _canAtack)
        {
            _canAtack = Time.time + _attackRate;

            Collider2D[] hitMongols = Physics2D.OverlapCircleAll(_hitBoxAttack.position, _attackRangeForHitBox, _enemyLayers);

            foreach (Collider2D mongol in hitMongols)
            {
                _audioSource.PlayOneShot(_damageSound);
                mongol.GetComponent<Mongol>().TakeDamage();
            }

            _animator.SetTrigger("isAtack");
            _audioSource.PlayOneShot(_attackSound);
        }
    }

    private void Block()
    {
        _isBlocking = Input.GetButton("Block");
        _animator.SetBool("isBlock", _isBlocking);
    }

    private void Dodge()
    {
        bool dodgeInput = Input.GetButtonDown("Dodge");

        if (dodgeInput && _canDodge && (_horizontalInput != 0 || _verticalInput != 0))
        {
            StartCoroutine(PerformDodge());
        }
    }

    private IEnumerator PerformDodge()
    {
        _canDodge = false;
        _audioSource.PlayOneShot(_dodgeSound);
        Vector2 dodgeDirection = new Vector2(_horizontalInput, _verticalInput).normalized;
        Vector2 dodgeDistance = dodgeDirection * _dodgeSpeed * Time.fixedDeltaTime;
        Vector2 newPosition = _rigidbody2D.position + dodgeDistance;
        _rigidbody2D.MovePosition(newPosition);
        _sprite.color = new Color(0, 255, 0); // Color of Dodge (Green)
        yield return new WaitForSeconds(0.2f);
        _sprite.color = new Color(255, 255, 255); // Return Original Color
        yield return new WaitForSeconds(0.05f);
        _canDodge = true;
    }

    //========================================================================
    //============================ PUBLIC METHODS ============================
    //========================================================================
    public void TakeDamage()
    {
        StartCoroutine(DamageEffects());
    }

    private IEnumerator DamageEffects()
    {
        bool detected = false;
        int damage = 15;

        Collider2D[] hitMongols = Physics2D.OverlapCircleAll(_hitBoxAttack.position, _attackRangeForHitBox, _enemyLayers);

        foreach (Collider2D mongol in hitMongols)
        {
            detected = true;
            Mongol mongolScript = mongol.GetComponent<Mongol>();
            if (mongolScript != null) // Block Stack
            {                
                int prediction = _life - (_isBlocking ? damage / 4 : damage);
                _life = prediction < 0 ? 0 : prediction;
                if (!_isBlocking) _sprite.color = new Color(255, 0, 0);
                _audioSource.PlayOneShot(_isBlocking ? _blockSound : _damageSound);
            }
        }

        if (!detected) // That Means That the Enemy is not on the circle and will be atacked
        {
            int prediction = _life - damage;
            _life = prediction < 0 ? 0 : prediction;
            _sprite.color = new Color(255, 0, 0);
            _audioSource.PlayOneShot(_damageSound);
        }

        GameManager.Instance.SamuraiLifeBar((float)_life / 100);
        yield return new WaitForSeconds(0.1f);
        _sprite.color = new Color(255, 255, 255); // Return Original Color
    }
}`,
        },
        {
          title: 'Mongol (Enemy)',
          language: 'csharp',
          description: 'Main Functionallity for the Enemy Mongol',
          code: `using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Mongol : MonoBehaviour
{
    // ===> Atributes
    [SerializeField] private float _walkSpeed;
    [SerializeField] private float _atackRate = 2.0f;
    [SerializeField] private int _life = 3;

    // ===> Components
    private Animator _animator;
    private Rigidbody2D _rigidbody2D;
    private SpriteRenderer _sprite;
    private Samurai _samurai;
    private Transform _samuraiPosition;

    // ===> private Auxiliar Atributes
    
    private float _distance;
    private bool _closeToTheSamurai => _distance < 1.5f;
    private bool _closeToTheDoor => transform.position.x > -0.6f && transform.position.x < 0.6f;
    private bool _frontOfTheDoor => transform.position.y > -1.6f && transform.position.x > -0.6f && transform.position.x < 0.6f;
    private float _canAtack = -1.0f;
    
    void Start()
    {
        _animator = GetComponent<Animator>();
        _rigidbody2D = GetComponent<Rigidbody2D>();
        _sprite = GetComponent<SpriteRenderer>();
        GameObject samuraiGameObject = GameObject.FindGameObjectWithTag("Player"); // Step 3

        if(_animator == null)
            Debug.LogError("Mongol.cs error: Animator is null");

        if(_rigidbody2D == null)
            Debug.LogError("Mongol.cs error: Animator is null");

        if(_sprite == null)
            Debug.LogError("Mongol.cs error: Animator is null");

        // Step 3
        if(samuraiGameObject != null)
        {
            _samurai = samuraiGameObject.GetComponent<Samurai>();
            _samuraiPosition = samuraiGameObject.GetComponent<Transform>();
        }

        if(_samurai == null)
            Debug.LogError("Mongol.cs error: Samurai is null");

        if(_samuraiPosition == null)
            Debug.LogError("Mongol.cs error: Position of Samurai is null");
    }

    void Update()
    {
        // ! =========================================================================================================
        // Steps to take for create Mongol
        // 1. Detect if the position.x is positive or negative, if is negative dont flipX, if is positive plifY
        // 2. Mongol need to walk
        // 3. Take distance Beetween mongol and samurai (if the distance is < 1f then stop walk and atack).
        // 4. If the Mongol is between the point -0.6 a 0.6 go up (position -1.673084f)
        // 5. If the Mongol is in the position -1.673084f then stop and start Atack and make damage to the Door
        // ! =========================================================================================================

        ActionsAI();
    }

    //========================================================================
    //============================ PRIVATE METHODS ===========================
    //========================================================================
    private void ActionsAI()
    {
        // Check if the enemy is Death  
        if(_life <= 0) 
        {
            _animator.SetTrigger("isDeath");
            _rigidbody2D.velocity = new Vector2(0f, 0f);
            Destroy(this.gameObject, 2.3f);
            return;
        }
        
        _sprite.flipX = FlipMongol(); // Step 1

        _rigidbody2D.velocity = new Vector2(HorizontalMovement(), VerticalMovement()); // Step 2

        // Step 3
        _distance = Vector2.Distance(transform.position, _samuraiPosition.position);        

        if(_closeToTheSamurai)
        {
            Atack();
        }

        // Step 5
        if(_frontOfTheDoor)
        {
            Atack();
        }
                
        _animator.SetBool("isWalk", HorizontalMovement() != 0 || VerticalMovement() != 0);
    }

    private void Atack()
    {
        if(Time.time > _canAtack)
        {            
            _canAtack = Time.time + _atackRate;
            StartCoroutine(AtackEffects());            
        }
    }

    private IEnumerator AtackEffects()
    {
        yield return new WaitForSeconds(0.4f); // Start Animation
        _animator.SetBool("isAtack", true);       

        yield return new WaitForSeconds(0.2f); // Enable Atack Colision        
        // ! ATACK FOR REST LIFE TO SAMURAI AND/OR DOOR
        if(_closeToTheSamurai) _samurai.TakeDamage(); // Samurai Damage
        if(_frontOfTheDoor) GameManager.Instance.InvasionProgressBar();
        _sprite.color = new Color(78, 78, 255, 255); // Blue Color

        yield return new WaitForSeconds(0.13f); // Disable Atack and return Color
        _sprite.color = new Color(255, 255, 255);

        yield return new WaitForSeconds(0.03f); // Finish Animation of Atack
        _animator.SetBool("isAtack", false);

        yield return new WaitForSeconds(3f);        
    }
    
    private float HorizontalMovement()
    {
        if(_closeToTheSamurai) return 0f;

        if(_closeToTheDoor) return 0f;

        return _sprite.flipX ? -1f : 1f * _walkSpeed;
    }

    private float VerticalMovement() // Step 4
    {
        if(_closeToTheSamurai) return 0f;

        if(_frontOfTheDoor) return 0f; // Step 5

        if(_closeToTheDoor) return 1f * _walkSpeed;
        
        return _rigidbody2D.velocity.y;
    }

    private bool FlipMongol()
    {
        if(_closeToTheSamurai)        
            return _samuraiPosition.position.x > 0;
        
        return transform.position.x > 0;
    }

    //========================================================================
    //============================ PUBLIC METHODS ============================
    //========================================================================
    public void TakeDamage()
    {
        if(_life > 0) StartCoroutine(DamageEffects());
    }

    private IEnumerator DamageEffects()
    {
        int prediction = _life - 1;
        _life = prediction < 0 ? 0 : prediction;
        if(_life > 0) _sprite.color = new Color(255, 0, 0); // Red
        if(_life == 0) GameManager.Instance.DefeatedEnemy();
        yield return new WaitForSeconds(0.1f);
        _sprite.color = new Color(255, 255, 255); // Return Original Color
    }
}`,
        },
      ],
    },
  },

  'defuse-the-bomb': {
    contentSections: [
      {
        type: 'hero',
        data: {
          showVideo: false,
          showGallery: true,
          galleryType: 'carousel',
        },
      },
      {
        type: 'hackathon-story',
        data: {
          showTimeline: true,
          showChallenges: true,
          showTeamWork: true,
          showTeamworkers: true,
        },
      },
      {
        type: 'rapid-development',
        data: {
          showTimeConstraints: true,
          showDecisionMaking: true,
        },
      },
    ],
    customContent: {
      hackathonStory: {
        duration: 'One Week (7 Days)',
        timeline: [
          // Days 1-2: Coordination & Planning Phase
          { hour: 0, event: 'Team formation, brainstorming, and game concept establishment' },
          { hour: 8, event: 'Detailed game design document and technical architecture planning' },
          { hour: 16, event: 'Task assignment and development environment setup' },
          { hour: 24, event: 'Asset requirements defined and Unity project initialization' },

          // Days 3-4: Core Development Phase
          { hour: 32, event: 'First-person controller and house environment implementation' },
          { hour: 40, event: 'Radar system prototype and random bomb spawn architecture' },
          { hour: 48, event: 'Object interaction mechanics and bomb detection system' },
          { hour: 56, event: 'Bomb inheritance structure and timer system implementation' },

          // Days 5-6: Feature Development & Integration
          {
            hour: 64,
            event: 'Mini-games development: typing, cat launcher (Michil), water disposal',
          },
          { hour: 72, event: 'Physics-based throwing mechanics and UI event integration' },
          { hour: 80, event: 'Victory/defeat cinematics and sound effect implementation' },
          { hour: 88, event: 'Initial playtesting and core system debugging' },

          // Day 7: Polish & Finalization
          { hour: 96, event: 'Audio balancing, UI polish, and performance optimization' },
          { hour: 104, event: 'Final debugging, submission preparation, and team retrospective' },
        ],
        challenges: [
          'Coordinating multiple unique bomb mini-games with different interaction mechanics',
          'Implementing random bomb placement system while ensuring balanced difficulty',
          'Integrating physics-based object manipulation with responsive gameplay feel',
          'Synchronizing audio feedback with radar detection and gameplay events',
          'Managing scope and feature complexity within strict one-week deadline',
          'Ensuring each bomb defusal event had clear instructions and intuitive gameplay',
          'Balancing realistic development timeline with ambitious game design vision',
        ],
        teamwork: [
          'Strategic task division: Cristian (environment, bomb logic, cinematics, game manager), Dariel (radar, interaction, mini-games, audio), Eyunu (3D Models and Effects)',
          'Daily coordination meetings during planning phase, then focused development sprints',
          'Pair programming sessions for complex mechanics (physics integration, bomb inheritance system)',
          'Continuous integration workflow with regular playtesting to catch issues early',
          'Collaborative decision-making on scope adjustments and feature prioritization',
          'Cross-review of implementations to maintain code quality and design consistency',
          'Shared responsibility for final polish and submission preparation',
        ],
      },
    },
  },

  draculae: {
    contentSections: [
      {
        type: 'hero',
        data: {
          showVideo: false,
          showGallery: true,
          galleryType: 'carousel',
        },
      },
      {
        type: 'overview',
        data: {
          showTechnicalSpecs: true,
          showTeamInfo: true,
          showDevelopmentTimeline: false,
        },
      },
      {
        type: 'features',
        data: {
          displayStyle: 'list',
          showIcons: true,
        },
      },
      {
        type: 'hackathon-story',
        data: {
          showTimeline: true,
          showChallenges: true,
          showTeamWork: true,
          showTeamworkers: true,
        },
      },
    ],
    customContent: {
      atmosphereDesign: [
        'Dynamic lighting system for cave exploration',
        'Procedural ambient sound generation',
        'Tension-building through audio cues',
        'Minimalist UI for immersion',
      ],
      hackathonStory: {
        duration: '48-Hour',
        timeline: [
          {
            hour: 0,
            event:
              'Team formation, brainstorming bubble-jumping concepts and dragon theme establishment',
          },
          {
            hour: 2,
            event:
              'Game concept finalized: multiplayer coin-throwing bubble-popping with sleeping dragon',
          },
          {
            hour: 4,
            event: 'Task assignment across 6 team members and development environment setup',
          },
          {
            hour: 8,
            event:
              'Character controller implementation and basic movement with multiple input support',
          },
          { hour: 12, event: 'Coin throwing mechanics and dragon model integration started' },
          {
            hour: 16,
            event: 'Bubble spawning system from dragon nose and collision detection implemented',
          },
          {
            hour: 20,
            event:
              'Fire breathing mechanics and player burning effects with temporary invincibility',
          },
          { hour: 24, event: 'Coin collection system, player counters, and timer implementation' },
          {
            hour: 28,
            event: 'UI systems development: main game, controls explanation, and results screens',
          },
          {
            hour: 32,
            event:
              'Audio integration: medieval cave ambience, sound effects, and music implementation',
          },
          {
            hour: 36,
            event: 'Introduction cutscene, physics interactions, and visual polish integration',
          },
          { hour: 42, event: 'Final playtesting, multiplayer balancing, and bug fixing' },
          { hour: 48, event: 'Final presentation preparation and team showcase' },
        ],
        challenges: [
          'Coordinating 6 team members across programming, art, audio, and design disciplines',
          'Implementing responsive multiplayer mechanics with multiple controller support',
          'Creating convincing fire breath effects that interact properly with player characters',
          'Balancing bubble spawning rate and dragon sensitivity for fair competitive gameplay',
          'Synchronizing audio cues with visual effects for immersive dragon interactions',
          'Managing asset pipeline between 3D modelers, programmers, and UI designers',
          'Ensuring smooth character movement with "floaty" personality while maintaining control precision',
        ],
        teamwork: [
          'Clear role division: Cristian (core mechanics, UI, audio), Dariel (bubble/fire systems), Kenneth (cutscenes, physics, AI)',
          'Parallel development streams: Elean (UI design, sounds), Michy (3D models), Ricardo (music composition)',
          'Regular sync meetings every 8 hours to integrate assets and resolve dependencies',
          'Collaborative playtesting sessions to validate multiplayer balance and fun factor',
          'Cross-disciplinary problem solving for technical challenges like fire effect implementation',
          'Shared asset repository with version control for seamless integration workflow',
          'Agile scope adjustment to prioritize core multiplayer experience over bonus features',
        ],
      },
    },
  },

  'shucos-maker': {
    contentSections: [
      {
        type: 'hero',
        data: {
          showVideo: false,
          showGallery: true,
          galleryType: 'carousel',
        },
      },
      {
        type: 'overview',
        data: {
          showTechnicalSpecs: true,
          showTeamInfo: true,
          showDevelopmentTimeline: true,
        },
      },
      {
        type: 'features',
        data: {
          displayStyle: 'cards',
          showIcons: true,
        },
      },
      {
        type: 'code-showcase',
        data: {
          showCodeSnippets: true,
          codeLanguage: 'csharp',
          showArchitecture: true,
        },
      },
    ],
    customContent: {
      culturalResearch: [
        'Traditional Guatemalan street food preparation',
        'Cultural significance of shucos in Guatemala',
        'Authentic ingredient sourcing and preparation methods',
        'Community feedback and cultural accuracy validation',
      ],
      vrFeatures: [
        'Hand tracking for realistic cooking motions',
        'Haptic feedback for ingredient handling',
        'Immersive market environments',
        'Cultural music and ambient sounds',
      ],
      codeSnippets: [
        {
          title: 'Shuco Script',
          language: 'csharp',
          description: 'For Simulate the coocking of the Shuco',
          code: `using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// Importar librerias para UI
using UnityEngine.UI;
using TMPro;

/*
 * Shuco:
 * Script que tendra todo el control sobre el manejo del
 * montaje, que se habilitara y que no estara habilitado.
 * El shuco esta conformado por los siguientes game objects:
 * - Pan Normal
 * ***********************************************************
 * - Pan Abierto
 * - Aguacate
 * - Repollo (Antes de cerrar)
 * - Salami
 * - Salchicha
 * - Tocino
 * - Chorizo
 * - Ketchup
 * - Mayonesa
 * - Mostasa
 * ***********************************************************
 * - Pan Listo
 * - Repollo (Despues de cerrar)
 * - Papel
 * - Bolsa
 * ***********************************************************
 * PD: Can be Cook estara marcado en false para evitar que
 *     empiece a cocerse.
 */
public class Shuco : Cook
{
    // Gameobjects que conformaran al Shuco
    [SerializeField] private GameObject breadClosed, breadOpen, breadReady; // *PANES*
    [SerializeField] private GameObject guacamole, cabbageBefore, cabbageAfter; // *AGUACATE Y REPOLLO*
    [SerializeField] private GameObject saugue, bakon, salami, chorizo; // *EMBUTIDOS*
    [SerializeField] private GameObject ketchup, mayonese, mustard; // *SALSAS*
    [SerializeField] private Spoon spoonState; // *LOGICA CUCHARA*
    [SerializeField] private GameObject tray, paper, plasticBag; // *PLATO, PAPEL y BOLSA DE PLASTICO*

    // States para detectar de una manera SEGURA la condicion del shuco
    private bool isBreadHot = false, isBreadOpen = false, isBreadReady = false;

    // ==> Elementos para el UI y el counter
    [SerializeField] private TextMesh informationText;    
    public CountController countController;
    private UIForShuco uiForShuco;

    // ==> Para tener el control de los botones del VR
    [SerializeField] private OVRInput.Button buttonOneforVR;

    // ==> Para tener el control de las salsas
    // No me gusta como esta estructurado esto de los segundos pero bueno jaja
    [SerializeField] private int saugueTime = 5;
    private int secondsKetchup = 0, secondsMayonese = 0, secondsMostard = 0;

    private AudioSource saugueSound;

    // ==> Tener el contro lde todos los elementos por medio de un hashmap/diccionario
    
    private Dictionary<int, bool> elementsDone = new Dictionary<int, bool>();
    

    // * =============================================================================
    // * === UNITY METHODS ===========================================================
    // * =============================================================================

    private void Awake() // Para encontrar los elementos escenciales para continuar
    {
        spoonState = FindObjectOfType<Spoon>();
        informationText = FindObjectOfType<TextMesh>();
        countController = FindObjectOfType<CountController>();
        uiForShuco = FindObjectOfType<UIForShuco>();

        GameObject gameObjectSaugeSound = GameObject.Find("SaugueSound");

        if(gameObjectSaugeSound != null)
        {
            saugueSound = gameObjectSaugeSound.GetComponent<AudioSource>();

            if(saugueSound == null) Debug.LogError("Saugue Sound Audio Source is Null");
        }
        else Debug.LogError("Saugue Sound Game Object is Null");

        if(uiForShuco == null)
        {
            Debug.LogError("UI For Shuco Selected is Null");
        }

        for(int i = 0; i < uiForShuco.TotalElements; i++)
        {
            elementsDone.Add(i, false);
        }
    }
    
    private void OnCollisionEnter(Collision other)
    {
        // PASO 1) Vamos a abrir el pan (Si se hace contacto con el cuchillo)
        if (other.gameObject.tag.Equals("knife") && isBreadOpen == false)
        {
            AudioManager.Play(AudioClipName.knifesharpener1);
            isBreadOpen = true;            
            breadClosed.SetActive(false);
            breadOpen.SetActive(true);
            ChangueCookToTrue();
        }

        // PASO 2) Vamos a calentar el pan
        StartToCook(other); // other = objeto que esta colisionando

        // PASO 3) Vamos a ingresar todos los ingredientes para el shuco
        if (isBreadOpen == true && isBreadHot == true)
        {
            ActivateAndDestroyElementOfShuco("saugueDone", other, saugue, AudioClipName.pop2, 5);
            ActivateAndDestroyElementOfShuco("bakonDone", other, bakon, AudioClipName.pop2, 6);
            ActivateAndDestroyElementOfShuco("salamiDone", other, salami, AudioClipName.pop2, 7);
            ActivateAndDestroyElementOfShuco("chorizoDone", other, chorizo, AudioClipName.pop2, 8);

            if(other.gameObject.tag.Equals("spoon"))
            {
                // Agregar aguacate
                if(spoonState.contents == 1)
                {
                    guacamole.SetActive(true);
                    AudioManager.Play(AudioClipName.guacamole_sound);
                    elementsDone[0] = true;
                    uiForShuco.ChangeStateShuco(elementsDone);
                }
                // Agregar repollo
                if(spoonState.contents == 2)
                {
                    cabbageBefore.SetActive(true);
                    AudioManager.Play(AudioClipName.cabague_sound);
                    elementsDone[1] = true;
                    uiForShuco.ChangeStateShuco(elementsDone);
                }
            }
        }        

        // PASO 6) Cuando el shuco ya este cerrado se procedera a ingresar el plato, bolsa y papel
        if(isBreadReady)
        {
            ActivateAndDestroyElementOfShuco("tray", other, tray, AudioClipName.plastic_bag_sound); // Ingresar Plato
            ActivateAndDestroyElementOfShuco("plasticBag", other, plasticBag, AudioClipName.plastic_bag_sound); // Ingresar bolsa
            ActivateAndDestroyElementOfShuco("paper", other, paper, AudioClipName.plastic_bag_sound); // Ingresar papel
        }

        // PASO 7) Sellar el shuco con la parrilla (para sumar punteo)
        if (other.gameObject.tag.Equals("barbecue") && isShucoComplete())
        {
            AudioManager.Play(AudioClipName.bell);
            countController.addCount();
            Destroy(this.gameObject);
        }
    }

    private void OnTriggerStay(Collider other)
    {
        // PASO 4) Vamos a agregar las salsas correspondientes (Ketchup, Mayonesa y Mostaza)
        if (isBreadOpen == true && isBreadHot == true)
        {
            if(other.gameObject.CompareTag("ketchup"))
            {
                AudioManager.PlayContinueSound(saugueSound, true);
                StartCoroutine("AddKetchup");
            }

            if(other.gameObject.CompareTag("mayonese"))
            {
                AudioManager.PlayContinueSound(saugueSound, true);
                StartCoroutine("AddMayonese");
            }

            if(other.gameObject.CompareTag("mustard"))
            {
                AudioManager.PlayContinueSound(saugueSound, true);
                StartCoroutine("AddMustard");
            }
        }
        
        if(other.gameObject.tag.Equals("hitBoxHand")) // Detectar si las manos estan cerca del shuco
        {
            // PASO 5) Si el shuco tiene los ingredientes completos entonces se procedera a cerrar
            if(isShucoIngredientsComplete()) // Si dado caso el shuco ya tiene montado todos los ingredientes esperados
            {
                informationText.text = "Presiona 'A' o 'X' para cerrar el shuco"; // Cuando la mano este en el pan nostros podremos cerrar el shuco
                // Ahora vamos a esperar el input del boton A para cambiar el modelo del shuco
                if(OVRInput.GetDown(buttonOneforVR, OVRInput.Controller.RTouch) || OVRInput.GetDown(buttonOneforVR, OVRInput.Controller.LTouch))
                {
                    // Esto significa que el shuco ya se termino de cocinar de una forma exitosa
                    informationText.text = "";
                    breadOpen.SetActive(false);
                    cabbageBefore.SetActive(false);
                    breadReady.SetActive(true);
                    cabbageAfter.SetActive(true);
                    isBreadReady = true;
                    AudioManager.Play(AudioClipName.pop3);
                }
            }

            // PASO 7) Solo se indicara que el shuco ya esta completo cuando una de las manos del jugador este cerca del shuco
            if(isShucoComplete())
            {
                informationText.text = "Shuco Listo, mandalo a la parilla";
            }

            // EXTRA: Mostrar el estado del shuco que se esta preparando
            if(!isBreadHot)
            {
                uiForShuco.ActiveTextSelectedShuco(true);
            }

            if(isBreadHot)
            {
                uiForShuco.ActiveShucoElementsSelected(true);
                uiForShuco.ChangeStateShuco(elementsDone);
            }
        }
    }

    private void OnTriggerExit(Collider other)
    {
        informationText.text = "";
        AudioManager.PlayContinueSound(saugueSound, false);
        StopCoroutine("AddKetchup");
        StopCoroutine("AddMayonese");
        StopCoroutine("AddMustard");
        uiForShuco.ActiveTextSelectedShuco(false);
        uiForShuco.ActiveShucoElementsSelected(false);
    }

    // * =============================================================================
    // * === OWN METHODS =============================================================
    // * =============================================================================

    private void ActivateAndDestroyElementOfShuco(string tagElement, Collision other, GameObject obElement, AudioClipName audioClipName)
    {
        if(other.gameObject.tag.Equals(tagElement) && !obElement.activeSelf)
        {
            AudioManager.Play(audioClipName);
            obElement.SetActive(true);
            GameObject gameObjectTemp = other.gameObject;
            gameObjectTemp.transform.position = new Vector3(-1.3f, -0.50f, -5f);
        }
    }

    private void ActivateAndDestroyElementOfShuco(string tagElement, Collision other, GameObject obElement, AudioClipName audioClipName, int numElement)
    {
        if(other.gameObject.tag.Equals(tagElement) && !obElement.activeSelf)
        { 
            AudioManager.Play(audioClipName);
            obElement.SetActive(true);
            GameObject gameObjectTemp = other.gameObject;
            gameObjectTemp.transform.position = new Vector3(-1.3f, -0.50f, -5f);
            elementsDone[numElement] = true;
            uiForShuco.ChangeStateShuco(elementsDone);
        }
    }
    
    override public void ChangueMaterial()
    {
        AudioManager.Play(AudioClipName.point_bell);
        breadOpen.GetComponent<MeshRenderer>().material = materialReady;
        isBreadHot = true;
    }

    // Vamos a detectar si el shuco tiene todos los ingredientes y condiciones para denominarlo como completo
    private bool isShucoIngredientsComplete(){        
        return (breadOpen.activeSelf && saugue.activeSelf && bakon.activeSelf &&
                salami.activeSelf && chorizo.activeSelf &&
                guacamole.activeSelf && cabbageBefore.activeSelf &&
                ketchup.activeSelf && mayonese.activeSelf && mustard.activeSelf);
    }

    // Si el plato, bolsa de plastico y el papel estan activados indicaremos que el shuco ya esta completo
    public bool isShucoComplete(){
        return (tray.activeSelf && paper.activeSelf && plasticBag.activeSelf);
    }

    IEnumerator AddKetchup()
    {
        while(secondsKetchup <= saugueTime)
        {
            informationText.text = "ketchup: " + secondsKetchup + " s / " + saugueTime + " s";
            yield return new WaitForSeconds(1f);
            secondsKetchup++;
            if(secondsKetchup >= saugueTime)
            {
                ketchup.SetActive(true);
                elementsDone[2] = true;
                uiForShuco.ChangeStateShuco(elementsDone);
            }
        }
    }

    IEnumerator AddMayonese()
    {
        while(secondsMayonese <= saugueTime)
        {
            informationText.text = "Mayonese: " + secondsMayonese + " s / " + saugueTime + " s";
            yield return new WaitForSeconds(1f);
            secondsMayonese++;
            if(secondsMayonese >= saugueTime)
            {
                mayonese.SetActive(true);
                elementsDone[3] = true;
                uiForShuco.ChangeStateShuco(elementsDone);
            }
        }
    }

    IEnumerator AddMustard()
    {
        while(secondsMostard <= saugueTime)
        {
            informationText.text = "Mustard: " + secondsMostard + " s / " + saugueTime + " s";
            yield return new WaitForSeconds(1f);
            secondsMostard++;
            if(secondsMostard >= saugueTime)
            {
                mustard.SetActive(true);
                elementsDone[4] = true;
                uiForShuco.ChangeStateShuco(elementsDone);
            }
        }
    }

    // Pido perdón por repetir mucho código :(
}`,
        },
        {
          title: 'UI Element Mark',
          language: 'csharp',
          description: 'Handle all the scripts of the shucos process',
          code: `using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UIElementMark : MonoBehaviour
{
    private Sprite spriteElementNotMarked;
    [SerializeField] private Sprite spriteElementMarked;


    // Start is called before the first frame update
    private void Start()
    {
        spriteElementNotMarked = this.GetComponent<Image>().sprite;

        if(spriteElementMarked == null)
        {
            Debug.LogError("You must need to put the image Element Done");
        }
    }

    public void ElementMarked()
    {
        this.GetComponent<Image>().sprite = spriteElementMarked;
    }

    public void ElementNotMarked()
    {
        this.GetComponent<Image>().sprite = spriteElementNotMarked;
    }
}`,
        },
        {
          title: 'UI For Shuco',
          language: 'csharp',
          description: 'Show dinamicly the elements of the shuco',
          code: `using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIForShuco : MonoBehaviour
{
    [SerializeField] private GameObject textSelectedShuco, shucoSelected;
    [SerializeField] private UIElementMark[] elementsMarked;
    private Dictionary<int, bool> elementsDone;

    public int TotalElements
    {
        get { return elementsMarked.Length;}
    }

    // Start is called before the first frame update
    private void Start()
    {
        if(textSelectedShuco == null)
        {
            Debug.LogError("the GameObject TextSelectedShuco is Null");
        }
        else
        {
            textSelectedShuco.SetActive(false);
        }

        if(shucoSelected == null)
        {
            Debug.LogError("the GameObject shucoSelected is Null");
        }
        else
        {
            shucoSelected.SetActive(false);
        }
    }

    private void Update()
    {
        if(elementsDone != null && shucoSelected.activeSelf)
        {
            // Iterar todo el diccionario
            foreach(KeyValuePair<int, bool> element in elementsDone)
            {
                int numElement = element.Key;
                bool isMark = element.Value;
                
                if(isMark) elementsMarked[numElement].ElementMarked();
                else elementsMarked[numElement].ElementNotMarked();
            }
        }
    }

    public void ActiveTextSelectedShuco(bool active)
    {
        textSelectedShuco.SetActive(active);
    }

    public void ActiveShucoElementsSelected(bool active)
    {
        shucoSelected.SetActive(active);
    }

    public void ChangeStateShuco(Dictionary<int, bool> elements)
    {
        elementsDone = elements;
    }
}`,
        },
      ],
    },
  },
}

// Enhanced games data with content configurations
export const enhancedGamesData = gamesData.map((game) => ({
  ...game,
  contentConfig: gameContentConfigurations[game.id] || {
    contentSections: [
      {
        type: 'hero',
        data: { showGallery: true, galleryType: 'carousel' },
      },
      {
        type: 'overview',
        data: { showTechnicalSpecs: true, showTeamInfo: true },
      },
    ],
    customContent: {},
  },
}))

// Background carousel images for hero section
export const backgroundImages = [
  PlatyfaMainBg,
  ProcrastinateMain,
  RoboticMain,
  SamuraiMain,
  PlatyfaImg1,
  ProcrastinateImg1,
  RoboticImg1,
]

// Game categories for filtering
export const gameCategories = [
  'all',
  'featured',
  'in development',
  'released',
  'completed',
  'prototype',
  'paused',
]

// Game statistics
export const gameStats = {
  totalGames: gamesData.length,
  yearsExperience: new Date().getFullYear() - 2020,
  studiosCreated: 1,
  collaborations: gamesData.filter((game) => game.teamSize !== '1 developer').length,
}
